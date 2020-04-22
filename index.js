const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    const directory = await exec.exec('pwd')
    console.log(directory)
}

run()