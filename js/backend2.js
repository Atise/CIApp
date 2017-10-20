var yaml = require('js-yaml'),
    fs = require('fs');
fs.readFile('./job2.yml', 'utf8', function (e, data) {
    var file;
    if (e) {
        console.log('job2.yml not found.');
    } else {
        file = yaml.safeLoad(data, 'utf8');

        var newJobName = "newJobName";
        var newGitRepo = "testgit.com";
        var newGitConfigName = "confname";
        var newGitConfigEmail = "confemail";

        var testa = ".'git-config-name'";

        file[0].defaults.scm[0].git.url = newGitRepo;
        //file[0].defaults.scm[0].git.git-config-name = newGitRepo;
        //file[0].defaults.scm[0].git.git-config-email = newGitRepo;
        file[1].job.name = newJobName;
        file[1].job.properties[0].github.url = newGitRepo;


        console.log(file[0].defaults.scm[0].git);

        
    }
});