var yaml = require('js-yaml'),
    fs = require('fs');
//Reading from a blueprint yaml file
fs.readFile('./job2.yml', 'utf8', function (e, data) {
    var file;
    if (e) {
        console.log('job2.yml not found.');
    } else {
        file = yaml.safeLoad(data, 'utf8');

        var newJobName = "newJobName20";
        var newGitRepo = "testgit.com";
        var newGitConfigName = "confname";
        var newGitConfigEmail = "confemail";

        file[0].defaults.scm[0].git.url = newGitRepo;
        file[0].defaults.scm[0].git['git-config-name'] = newGitConfigName;
        file[0].defaults.scm[0].git['git-config-email'] = newGitConfigEmail;
        file[1].job.name = newJobName;
        file[1].job.properties[0].github.url = newGitRepo;

        console.log(file[0].defaults.scm[0].git['git-config-name']);

        fs.writeFileSync("testa.json", JSON.stringify(file, null, 2));


        const execSync = require('child_process').execSync;
        var cmd = execSync('jenkins-jobs --conf jenkins_jobs.ini update testa.json');
    }
});