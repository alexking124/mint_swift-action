const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    const mintfilePath = core.getInput('path-to-mintfile');
    console.log(mintfilePath)
    try {
        await exec.exec('pwd');
        await exec.exec('which log').catch((e) => { console.error(e.message) });
        await exec.exec('brew outdated mint');
        await exec.exec('brew install mint');
        await exec.exec(`mint bootstrap -m ${mintfilePath}`);
    }
    catch (error) {
        core.setFailed(error);
    }
}

run()
