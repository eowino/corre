import { join } from 'path';
import { existsSync } from 'fs';
import { exec } from 'child_process';
import inquirer from 'inquirer';

const CLIMB = '../';
const MAX_CLIMB = 10;

async function inquireScripts(scripts: string[]) {
    const { script }: { script: string } = await inquirer.prompt({
        choices: scripts,
        message: "Choose which script you'd like to run",
        name: 'script',
        type: 'list'
    });

    return script;
}

function getPath(count: number) {
    let path = '';
    for (let i = 0; i < count; i++) {
        path += CLIMB;
    }

    return path;
}

function getScriptsFromPackage(): string[] {
    const pkgJson = 'package.json';

    let pkgFound = false;
    let iteration = 0;
    let path = '';

    while (!pkgFound && iteration <= MAX_CLIMB) {
        path = join(process.cwd(), getPath(iteration), pkgJson);
        pkgFound = existsSync(path);
        iteration += 1;
    }

    if (!pkgFound) {
        console.error(`Climbed ${MAX_CLIMB} without finding package.json 😞`);
        process.exit();
    }

    try {
        const scriptKeys = require(path).scripts;
        return Object.keys(scriptKeys);
    } catch (error) {
        console.error(`Found ${pkgJson} but was not able to parse it.`, error);
        return process.exit();
    }
}

(async () => {
    const scripts = getScriptsFromPackage();
    const script = await inquireScripts(scripts);
    const cmd = `npm run ${script}`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        console.log(stdout);

        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
    });
})();
