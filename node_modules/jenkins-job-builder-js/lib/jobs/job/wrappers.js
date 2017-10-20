'use strict';
var util$940 = require('../../misc/util.js');
var Inject$941 = require('./wrappers/inject.js');
var AndroidEmulator$942 = require('./wrappers/android-emulator.js');
var Ansicolor$943 = require('./wrappers/ansicolor.js');
var BuildName$944 = require('./wrappers/build-name.js');
var Xvnc$945 = require('./wrappers/xvnc.js');
var Xvfb$946 = require('./wrappers/xvfb.js');
var WorkspaceCleanup$947 = require('./wrappers/workspace-cleanup.js');
var Timeout$948 = require('./wrappers/timeout.js');
var SshAgentCredentials$949 = require('./wrappers/ssh-agent-credentials.js');
var CopyToSlave$950 = require('./wrappers/copy-to-slave.js');
var CustomTools$951 = require('./wrappers/custom-tools.js');
var DeliveryPipeline$952 = require('./wrappers/delivery-pipeline.js');
var ConfigFileProvider$953 = require('./wrappers/config-file-provider.js');
var CredentialsBinding$954 = require('./wrappers/credentials-binding.js');
var EnvFile$955 = require('./wrappers/env-file.js');
var EnvScript$956 = require('./wrappers/env-script.js');
var BuildUserVars$957 = require('../../misc/empty-proxy.js');
var CiSkip$958 = require('../../misc/empty-proxy.js');
var MaskPasswords$959 = require('../../misc/empty-proxy.js');
var Timestamps$960 = require('../../misc/empty-proxy.js');
var Exclusion$961 = require('./wrappers/exclusion.js');
var InjectOwnershipVariables$962 = require('./wrappers/inject-ownership-variables.js');
var InjectPasswords$963 = require('./wrappers/inject-passwords.js');
var JClouds$964 = require('./wrappers/jclouds.js');
var JobLogLogger$965 = require('./wrappers/job-log-logger.js');
var LiveScreenshot$966 = require('./wrappers/live-screenshot.js');
var LogFileSize$967 = require('./wrappers/logfilesize.js');
var LogStash$968 = require('./wrappers/logstash.js');
var M2RepositoryCleanup$969 = require('./wrappers/m2-repository-cleanup.js');
var MatrixTieParent$970 = require('./wrappers/matrix-tie-parent.js');
var MongoDb$971 = require('./wrappers/mongo-db.js');
var PathIgnore$972 = require('./wrappers/pathignore.js');
var PortAllocator$973 = require('./wrappers/port-allocator.js');
var Rbenv$974 = require('./wrappers/rbenv.js');
var PreScmBuildstep$975 = require('./builders.js');
var Release$976 = require('./wrappers/release.js');
var RvmEnv$977 = require('./wrappers/rvm-env.js');
var SauceOndemand$978 = require('./wrappers/sauce-ondemand.js');
var NodeJsInstallator$979 = require('./wrappers/nodejs-installator.js');
var ArtifactoryMaven$980 = require('./wrappers/artifactory-maven.js');
var ArtifactoryMavenFreeStyle$981 = require('./wrappers/artifactory-maven-freestyle.js');
var ArtifactoryGeneric$982 = require('./wrappers/artifactory-generic.js');
var Wrappers$984 = function (upper$1028, array$1029) {
    this.upper = upper$1028;
    this.array = array$1029;
};
Wrappers$984.prototype.up = function () {
    return this.upper;
};
Wrappers$984.prototype.and = Wrappers$984.prototype.up;
module.exports = Wrappers$984;
Wrappers$984.prototype[util$940.camelize('android-emulator')] = function (value$1030) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'android-emulator',
        AndroidEmulator$942,
        value$1030
    ]);
};
Wrappers$984.prototype[util$940.camelize('ansicolor')] = function (value$1031) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ansicolor',
        Ansicolor$943,
        value$1031
    ]);
};
Wrappers$984.prototype[util$940.camelize('build-name')] = function (value$1032) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-name',
        BuildName$944,
        value$1032
    ]);
};
Wrappers$984.prototype[util$940.camelize('build-user-vars')] = function (value$1033) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-user-vars',
        BuildUserVars$957,
        value$1033
    ]);
};
Wrappers$984.prototype[util$940.camelize('ci-skip')] = function (value$1034) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ci-skip',
        CiSkip$958,
        value$1034
    ]);
};
Wrappers$984.prototype[util$940.camelize('config-file-provider')] = function (value$1035) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'config-file-provider',
        ConfigFileProvider$953,
        value$1035
    ]);
};
Wrappers$984.prototype[util$940.camelize('copy-to-slave')] = function (value$1036) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'copy-to-slave',
        CopyToSlave$950,
        value$1036
    ]);
};
Wrappers$984.prototype[util$940.camelize('credentials-binding')] = function (value$1037) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'credentials-binding',
        CredentialsBinding$954,
        value$1037
    ]);
};
Wrappers$984.prototype[util$940.camelize('custom-tools')] = function (value$1038) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'custom-tools',
        CustomTools$951,
        value$1038
    ]);
};
Wrappers$984.prototype[util$940.camelize('delivery-pipeline')] = function (value$1039) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'delivery-pipeline',
        DeliveryPipeline$952,
        value$1039
    ]);
};
Wrappers$984.prototype[util$940.camelize('env-file')] = function (value$1040) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'env-file',
        EnvFile$955,
        value$1040
    ]);
};
Wrappers$984.prototype[util$940.camelize('env-script')] = function (value$1041) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'env-script',
        EnvScript$956,
        value$1041
    ]);
};
Wrappers$984.prototype[util$940.camelize('exclusion')] = function (value$1042) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'exclusion',
        Exclusion$961,
        value$1042
    ]);
};
Wrappers$984.prototype[util$940.camelize('inject')] = function (value$1043) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$941,
        value$1043
    ]);
};
Wrappers$984.prototype[util$940.camelize('inject-ownership-variables')] = function (value$1044) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'inject-ownership-variables',
        InjectOwnershipVariables$962,
        value$1044
    ]);
};
Wrappers$984.prototype[util$940.camelize('inject-passwords')] = function (value$1045) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'inject-passwords',
        InjectPasswords$963,
        value$1045
    ]);
};
Wrappers$984.prototype[util$940.camelize('jclouds')] = function (value$1046) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'jclouds',
        JClouds$964,
        value$1046
    ]);
};
Wrappers$984.prototype[util$940.camelize('job-log-logger')] = function (value$1047) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'job-log-logger',
        JobLogLogger$965,
        value$1047
    ]);
};
Wrappers$984.prototype[util$940.camelize('live-screenshot')] = function (value$1048) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'live-screenshot',
        LiveScreenshot$966,
        value$1048
    ]);
};
Wrappers$984.prototype[util$940.camelize('locks')] = function (value$1049) {
    return util$940.keyedPrimitiveArrayElementAccessor.apply(this, [
        'locks',
        value$1049
    ]);
};
Wrappers$984.prototype[util$940.camelize('logfilesize')] = function (value$1050) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'logfilesize',
        LogFileSize$967,
        value$1050
    ]);
};
Wrappers$984.prototype[util$940.camelize('logstash')] = function (value$1051) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'logstash',
        LogStash$968,
        value$1051
    ]);
};
Wrappers$984.prototype[util$940.camelize('m2-repository-cleanup')] = function (value$1052) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'm2-repository-cleanup',
        M2RepositoryCleanup$969,
        value$1052
    ]);
};
Wrappers$984.prototype[util$940.camelize('mask-passwords')] = function (value$1053) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'mask-passwords',
        MaskPasswords$959,
        value$1053
    ]);
};
Wrappers$984.prototype[util$940.camelize('matrix-tie-parent')] = function (value$1054) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'matrix-tie-parent',
        MatrixTieParent$970,
        value$1054
    ]);
};
Wrappers$984.prototype[util$940.camelize('mongo-db')] = function (value$1055) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'mongo-db',
        MongoDb$971,
        value$1055
    ]);
};
Wrappers$984.prototype[util$940.camelize('pathignore')] = function (value$1056) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pathignore',
        PathIgnore$972,
        value$1056
    ]);
};
Wrappers$984.prototype[util$940.camelize('port-allocator')] = function (value$1057) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'port-allocator',
        PortAllocator$973,
        value$1057
    ]);
};
Wrappers$984.prototype[util$940.camelize('pre-scm-buildstep')] = function (value$1058) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pre-scm-buildstep',
        PreScmBuildstep$975,
        value$1058
    ]);
};
Wrappers$984.prototype[util$940.camelize('rbenv')] = function (value$1059) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'rbenv',
        Rbenv$974,
        value$1059
    ]);
};
Wrappers$984.prototype[util$940.camelize('release')] = function (value$1060) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'release',
        Release$976,
        value$1060
    ]);
};
Wrappers$984.prototype[util$940.camelize('rvm-env')] = function (value$1061) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'rvm-env',
        RvmEnv$977,
        value$1061
    ]);
};
Wrappers$984.prototype[util$940.camelize('sauce-ondemand')] = function (value$1062) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'sauce-ondemand',
        SauceOndemand$978,
        value$1062
    ]);
};
Wrappers$984.prototype[util$940.camelize('ssh-agent-credentials')] = function (value$1063) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ssh-agent-credentials',
        SshAgentCredentials$949,
        value$1063
    ]);
};
Wrappers$984.prototype[util$940.camelize('timeout')] = function (value$1064) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'timeout',
        Timeout$948,
        value$1064
    ]);
};
Wrappers$984.prototype[util$940.camelize('timestamps')] = function (value$1065) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'timestamps',
        Timestamps$960,
        value$1065
    ]);
};
Wrappers$984.prototype[util$940.camelize('workspace-cleanup')] = function (value$1066) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'workspace-cleanup',
        WorkspaceCleanup$947,
        value$1066
    ]);
};
Wrappers$984.prototype[util$940.camelize('xvfb')] = function (value$1067) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'xvfb',
        Xvfb$946,
        value$1067
    ]);
};
Wrappers$984.prototype[util$940.camelize('xvnc')] = function (value$1068) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'xvnc',
        Xvnc$945,
        value$1068
    ]);
};
Wrappers$984.prototype[util$940.camelize('nodejs-installator')] = function (value$1069) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'nodejs-installator',
        NodeJsInstallator$979,
        value$1069
    ]);
};
Wrappers$984.prototype[util$940.camelize('artifactory-maven')] = function (value$1070) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'artifactory-maven',
        ArtifactoryMaven$980,
        value$1070
    ]);
};
Wrappers$984.prototype[util$940.camelize('artifactory-maven-freestyle')] = function (value$1071) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'artifactory-maven-freestyle',
        ArtifactoryMavenFreeStyle$981,
        value$1071
    ]);
};
Wrappers$984.prototype[util$940.camelize('artifactory-generic')] = function (value$1072) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'artifactory-generic',
        ArtifactoryGeneric$982,
        value$1072
    ]);
};