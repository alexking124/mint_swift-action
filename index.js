const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try {
        // await exec.exec('pwd')
        await exec.exec('which mint')
        await exec.exec('brew outdated mint')
        await exec.exec('brew install mint')
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run()