'use strict';
var util$940 = require('../../misc/util.js');
var AggregateFlowTests$941 = require('../../misc/empty-proxy.js');
var AggregateTests$942 = require('./publishers/aggregate-tests.js');
var Archive$943 = require('./publishers/archive.js');
var ArtifactDeployer$944 = require('./publishers/artifact-deployer.js');
var BlameUpstream$945 = require('../../misc/empty-proxy.js');
var BuildPublisher$946 = require('./publishers/build-publisher.js');
var Campfire$947 = require('./publishers/campfire.js');
var CheckStyle$948 = require('./publishers/checkstyle.js');
var Cifs$949 = require('./publishers/cifs.js');
var Cigame$950 = require('../../misc/empty-proxy.js');
var ClaimBuild$951 = require('../../misc/empty-proxy.js');
var CloneWorkspace$952 = require('./publishers/clone-workspace.js');
var Cloverphp$953 = require('./publishers/cloverphp.js');
var Cobertura$954 = require('./publishers/cobertura.js');
var ConditionalPublisher$955 = require('./publishers/conditional-publisher.js');
var CopyToMaster$956 = require('./publishers/copy-to-master.js');
var CppCheck$957 = require('./publishers/cppcheck.js');
var DescriptionSetter$958 = require('./publishers/description-setter.js');
var DisplayUpstreamChanges$959 = require('../../misc/empty-proxy.js');
var DownstreamExt$960 = require('./publishers/downstream-ext.js');
var Doxygen$961 = require('./publishers/doxygen.js');
var Dry$962 = require('./publishers/dry.js');
var Email$963 = require('./publishers/email.js');
var EmailExt$964 = require('./publishers/email-ext.js');
var EmotionalJenkins$965 = require('../../misc/empty-proxy.js');
var FindBugs$966 = require('./publishers/findbugs.js');
var FingerPrint$967 = require('./publishers/fingerprint.js');
var Fitnesse$968 = require('./publishers/fitnesse.js');
var Ftp$969 = require('./publishers/ftp.js');
var Gatling$970 = require('../../misc/empty-proxy.js');
var Git$971 = require('./publishers/git.js');
var GithubNotifier$972 = require('../../misc/empty-proxy.js');
var GroovyPostbuild$973 = require('./publishers/groovy-postbuild.js');
var HtmlPublisher$974 = require('./publishers/html-publisher.js');
var ImageGallery$975 = require('./publishers/image-gallery.js');
var IrcBot$976 = require('./publishers/ircbot.js');
var Jabber$977 = require('./publishers/jabber.js');
var Jacoco$978 = require('./publishers/jacoco.js');
var Jclouds$979 = require('./publishers/jclouds.js');
var Jira$980 = require('../../misc/empty-proxy.js');
var JoinTrigger$981 = require('./publishers/join-trigger.js');
var Junit$982 = require('./publishers/junit.js');
var LogParser$983 = require('./publishers/logparser.js');
var LogStash$984 = require('./publishers/logstash.js');
var MavenDeploy$985 = require('./publishers/maven-deploy.js');
var Naginator$986 = require('./publishers/naginator.js');
var Performance$987 = require('./publishers/performance.js');
var Pipeline$988 = require('./publishers/pipeline.js');
var Plot$989 = require('./publishers/plot.js');
var Pmd$990 = require('./publishers/pmd.js');
var PostTasks$991 = require('./publishers/post-tasks.js');
var PostBuildScript$992 = require('./publishers/postbuildscript.js');
var RichTextPublisher$993 = require('./publishers/rich-text-publisher.js');
var Robot$994 = require('./publishers/robot.js');
var RubyMetrics$995 = require('./publishers/ruby-metrics.js');
var S3$996 = require('./publishers/s3.js');
var ScanBuild$997 = require('./publishers/scan-build.js');
var Scoverage$998 = require('./publishers/scoverage.js');
var Scp$999 = require('./publishers/scp.js');
var ShiningPanda$1000 = require('./publishers/shining-panda.js');
var SiteMonitor$1001 = require('./publishers/sitemonitor.js');
var SlocCount$1002 = require('./publishers/sloccount.js');
var Sonar$1003 = require('./publishers/sonar.js');
var Ssh$1004 = require('./publishers/ssh.js');
var Stash$1005 = require('./publishers/stash.js');
var Tap$1006 = require('./publishers/tap.js');
var TestNg$1007 = require('./publishers/testng.js');
var TextFinder$1008 = require('./publishers/text-finder.js');
var Trigger$1009 = require('./publishers/trigger.js');
var TriggerParameterizedBuild$1010 = require('./publishers/trigger-parameterized-build.js');
var Valgrind$1011 = require('./publishers/valgrind.js');
var Violations$1012 = require('./publishers/violations.js');
var Warnings$1013 = require('./publishers/warnings.js');
var WorkspaceCleanup$1014 = require('./publishers/workspace-cleanup.js');
var XmlSummary$1015 = require('./publishers/xml-summary.js');
var Xunit$1016 = require('./publishers/xunit.js');
var Zulip$1017 = require('../../misc/empty-proxy.js');
var Whitesource$1018 = require('./publishers/whitesource.js');
var Rundeck$1019 = require('./publishers/rundeck.js');
var Phabricator$1020 = require('./publishers/phabricator.js');
var Jdepend$1021 = require('./publishers/jdepend.js');
var Hipchat$1022 = require('./publishers/hipchat.js');
var CucumberTestResult$1023 = require('./publishers/cucumber-testresult.js');
var CucumberReports$1024 = require('./publishers/cucumber-reports.js');
var Clamav$1025 = require('./publishers/clamav.js');
var Artifactory$1026 = require('./publishers/artifactory.js');
var CloudFormation$1027 = require('./publishers/cloudformation.js');
var Publishers$1029 = function (upper$1117, array$1118) {
    this.upper = upper$1117;
    this.array = array$1118;
};
Publishers$1029.prototype.up = function () {
    return this.upper;
};
Publishers$1029.prototype.and = Publishers$1029.prototype.up;
module.exports = Publishers$1029;
Publishers$1029.prototype[util$940.camelize('aggregate-flow-tests')] = function (value$1119) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'aggregate-flow-tests',
        AggregateFlowTests$941,
        value$1119
    ]);
};
Publishers$1029.prototype[util$940.camelize('aggregate-tests')] = function (value$1120) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'aggregate-tests',
        AggregateTests$942,
        value$1120
    ]);
};
Publishers$1029.prototype[util$940.camelize('archive')] = function (value$1121) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'archive',
        Archive$943,
        value$1121
    ]);
};
Publishers$1029.prototype[util$940.camelize('artifact-deployer')] = function (value$1122) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'artifact-deployer',
        ArtifactDeployer$944,
        value$1122
    ]);
};
Publishers$1029.prototype[util$940.camelize('blame-upstream')] = function (value$1123) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'blame-upstream',
        BlameUpstream$945,
        value$1123
    ]);
};
Publishers$1029.prototype[util$940.camelize('build-publisher')] = function (value$1124) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-publisher',
        BuildPublisher$946,
        value$1124
    ]);
};
Publishers$1029.prototype[util$940.camelize('campfire')] = function (value$1125) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'campfire',
        Campfire$947,
        value$1125
    ]);
};
Publishers$1029.prototype[util$940.camelize('checkstyle')] = function (value$1126) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'checkstyle',
        CheckStyle$948,
        value$1126
    ]);
};
Publishers$1029.prototype[util$940.camelize('cifs')] = function (value$1127) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cifs',
        Cifs$949,
        value$1127
    ]);
};
Publishers$1029.prototype[util$940.camelize('cigame')] = function (value$1128) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cigame',
        Cigame$950,
        value$1128
    ]);
};
Publishers$1029.prototype[util$940.camelize('claim-build')] = function (value$1129) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'claim-build',
        ClaimBuild$951,
        value$1129
    ]);
};
Publishers$1029.prototype[util$940.camelize('clone-workspace')] = function (value$1130) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'clone-workspace',
        CloneWorkspace$952,
        value$1130
    ]);
};
Publishers$1029.prototype[util$940.camelize('cloverphp')] = function (value$1131) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cloverphp',
        Cloverphp$953,
        value$1131
    ]);
};
Publishers$1029.prototype[util$940.camelize('cobertura')] = function (value$1132) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cobertura',
        Cobertura$954,
        value$1132
    ]);
};
Publishers$1029.prototype[util$940.camelize('conditional-publisher')] = function (value$1133) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'conditional-publisher',
        ConditionalPublisher$955,
        value$1133
    ]);
};
Publishers$1029.prototype[util$940.camelize('copy-to-master')] = function (value$1134) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'copy-to-master',
        CopyToMaster$956,
        value$1134
    ]);
};
Publishers$1029.prototype[util$940.camelize('cppcheck')] = function (value$1135) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cppcheck',
        CppCheck$957,
        value$1135
    ]);
};
Publishers$1029.prototype[util$940.camelize('description-setter')] = function (value$1136) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'description-setter',
        DescriptionSetter$958,
        value$1136
    ]);
};
Publishers$1029.prototype[util$940.camelize('display-upstream-changes')] = function (value$1137) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'display-upstream-changes',
        DisplayUpstreamChanges$959,
        value$1137
    ]);
};
Publishers$1029.prototype[util$940.camelize('downstream-ext')] = function (value$1138) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'downstream-ext',
        DownstreamExt$960,
        value$1138
    ]);
};
Publishers$1029.prototype[util$940.camelize('doxygen')] = function (value$1139) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'doxygen',
        Doxygen$961,
        value$1139
    ]);
};
Publishers$1029.prototype[util$940.camelize('dry')] = function (value$1140) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'dry',
        Dry$962,
        value$1140
    ]);
};
Publishers$1029.prototype[util$940.camelize('email')] = function (value$1141) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'email',
        Email$963,
        value$1141
    ]);
};
Publishers$1029.prototype[util$940.camelize('email-ext')] = function (value$1142) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'email-ext',
        EmailExt$964,
        value$1142
    ]);
};
Publishers$1029.prototype[util$940.camelize('emotional-jenkins')] = function (value$1143) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'emotional-jenkins',
        EmotionalJenkins$965,
        value$1143
    ]);
};
Publishers$1029.prototype[util$940.camelize('findbugs')] = function (value$1144) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'findbugs',
        FindBugs$966,
        value$1144
    ]);
};
Publishers$1029.prototype[util$940.camelize('fingerprint')] = function (value$1145) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'fingerprint',
        FingerPrint$967,
        value$1145
    ]);
};
Publishers$1029.prototype[util$940.camelize('fitnesse')] = function (value$1146) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'fitnesse',
        Fitnesse$968,
        value$1146
    ]);
};
Publishers$1029.prototype[util$940.camelize('ftp')] = function (value$1147) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ftp',
        Ftp$969,
        value$1147
    ]);
};
Publishers$1029.prototype[util$940.camelize('gatling')] = function (value$1148) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gatling',
        Gatling$970,
        value$1148
    ]);
};
Publishers$1029.prototype[util$940.camelize('git')] = function (value$1149) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$971,
        value$1149
    ]);
};
Publishers$1029.prototype[util$940.camelize('github-notifier')] = function (value$1150) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github-notifier',
        GithubNotifier$972,
        value$1150
    ]);
};
Publishers$1029.prototype[util$940.camelize('groovy-postbuild')] = function (value$1151) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'groovy-postbuild',
        GroovyPostbuild$973,
        value$1151
    ]);
};
Publishers$1029.prototype[util$940.camelize('html-publisher')] = function (value$1152) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'html-publisher',
        HtmlPublisher$974,
        value$1152
    ]);
};
Publishers$1029.prototype[util$940.camelize('image-gallery')] = function (value$1153) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'image-gallery',
        ImageGallery$975,
        value$1153
    ]);
};
Publishers$1029.prototype[util$940.camelize('ircbot')] = function (value$1154) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ircbot',
        IrcBot$976,
        value$1154
    ]);
};
Publishers$1029.prototype[util$940.camelize('jabber')] = function (value$1155) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'jabber',
        Jabber$977,
        value$1155
    ]);
};
Publishers$1029.prototype[util$940.camelize('jacoco')] = function (value$1156) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'jacoco',
        Jacoco$978,
        value$1156
    ]);
};
Publishers$1029.prototype[util$940.camelize('jclouds')] = function (value$1157) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'jclouds',
        Jclouds$979,
        value$1157
    ]);
};
Publishers$1029.prototype[util$940.camelize('jira')] = function (value$1158) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'jira',
        Jira$980,
        value$1158
    ]);
};
Publishers$1029.prototype[util$940.camelize('join-trigger')] = function (value$1159) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'join-trigger',
        JoinTrigger$981,
        value$1159
    ]);
};
Publishers$1029.prototype[util$940.camelize('junit')] = function (value$1160) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'junit',
        Junit$982,
        value$1160
    ]);
};
Publishers$1029.prototype[util$940.camelize('logparser')] = function (value$1161) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'logparser',
        LogParser$983,
        value$1161
    ]);
};
Publishers$1029.prototype[util$940.camelize('logstash')] = function (value$1162) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'logstash',
        LogStash$984,
        value$1162
    ]);
};
Publishers$1029.prototype[util$940.camelize('maven-deploy')] = function (value$1163) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'maven-deploy',
        MavenDeploy$985,
        value$1163
    ]);
};
Publishers$1029.prototype[util$940.camelize('naginator')] = function (value$1164) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'naginator',
        Naginator$986,
        value$1164
    ]);
};
Publishers$1029.prototype[util$940.camelize('performance')] = function (value$1165) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'performance',
        Performance$987,
        value$1165
    ]);
};
Publishers$1029.prototype[util$940.camelize('pipeline')] = function (value$1166) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pipeline',
        Pipeline$988,
        value$1166
    ]);
};
Publishers$1029.prototype[util$940.camelize('plot')] = function (value$1167) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'plot',
        Plot$989,
        value$1167
    ]);
};
Publishers$1029.prototype[util$940.camelize('pmd')] = function (value$1168) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pmd',
        Pmd$990,
        value$1168
    ]);
};
Publishers$1029.prototype[util$940.camelize('post-tasks')] = function (value$1169) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'post-tasks',
        PostTasks$991,
        value$1169
    ]);
};
Publishers$1029.prototype[util$940.camelize('postbuildscript')] = function (value$1170) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'postbuildscript',
        PostBuildScript$992,
        value$1170
    ]);
};
Publishers$1029.prototype[util$940.camelize('rich-text-publisher')] = function (value$1171) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'rich-text-publisher',
        RichTextPublisher$993,
        value$1171
    ]);
};
Publishers$1029.prototype[util$940.camelize('robot')] = function (value$1172) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'robot',
        Robot$994,
        value$1172
    ]);
};
Publishers$1029.prototype[util$940.camelize('ruby-metrics')] = function (value$1173) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ruby-metrics',
        RubyMetrics$995,
        value$1173
    ]);
};
Publishers$1029.prototype[util$940.camelize('s3')] = function (value$1174) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        's3',
        S3$996,
        value$1174
    ]);
};
Publishers$1029.prototype[util$940.camelize('scan-build')] = function (value$1175) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'scan-build',
        ScanBuild$997,
        value$1175
    ]);
};
Publishers$1029.prototype[util$940.camelize('scoverage')] = function (value$1176) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'scoverage',
        Scoverage$998,
        value$1176
    ]);
};
Publishers$1029.prototype[util$940.camelize('scp')] = function (value$1177) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'scp',
        Scp$999,
        value$1177
    ]);
};
Publishers$1029.prototype[util$940.camelize('shining-panda')] = function (value$1178) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'shining-panda',
        ShiningPanda$1000,
        value$1178
    ]);
};
Publishers$1029.prototype[util$940.camelize('sitemonitor')] = function (value$1179) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'sitemonitor',
        SiteMonitor$1001,
        value$1179
    ]);
};
Publishers$1029.prototype[util$940.camelize('sloccount')] = function (value$1180) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'sloccount',
        SlocCount$1002,
        value$1180
    ]);
};
Publishers$1029.prototype[util$940.camelize('sonar')] = function (value$1181) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'sonar',
        Sonar$1003,
        value$1181
    ]);
};
Publishers$1029.prototype[util$940.camelize('ssh')] = function (value$1182) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ssh',
        Ssh$1004,
        value$1182
    ]);
};
Publishers$1029.prototype[util$940.camelize('stash')] = function (value$1183) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'stash',
        Stash$1005,
        value$1183
    ]);
};
Publishers$1029.prototype[util$940.camelize('tap')] = function (value$1184) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'tap',
        Tap$1006,
        value$1184
    ]);
};
Publishers$1029.prototype[util$940.camelize('testng')] = function (value$1185) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'testng',
        TestNg$1007,
        value$1185
    ]);
};
Publishers$1029.prototype[util$940.camelize('text-finder')] = function (value$1186) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'text-finder',
        TextFinder$1008,
        value$1186
    ]);
};
Publishers$1029.prototype[util$940.camelize('trigger')] = function (value$1187) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'trigger',
        Trigger$1009,
        value$1187
    ]);
};
Publishers$1029.prototype[util$940.camelize('trigger-parameterized-builds')] = function (value$1188) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'trigger-parameterized-builds',
        TriggerParameterizedBuild$1010,
        value$1188
    ]);
};
Publishers$1029.prototype[util$940.camelize('valgrind')] = function (value$1189) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'valgrind',
        Valgrind$1011,
        value$1189
    ]);
};
Publishers$1029.prototype[util$940.camelize('violations')] = function (value$1190) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'violations',
        Violations$1012,
        value$1190
    ]);
};
Publishers$1029.prototype[util$940.camelize('warnings')] = function (value$1191) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'warnings',
        Warnings$1013,
        value$1191
    ]);
};
Publishers$1029.prototype[util$940.camelize('workspace-cleanup')] = function (value$1192) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'workspace-cleanup',
        WorkspaceCleanup$1014,
        value$1192
    ]);
};
Publishers$1029.prototype[util$940.camelize('xml-summary')] = function (value$1193) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'xml-summary',
        XmlSummary$1015,
        value$1193
    ]);
};
Publishers$1029.prototype[util$940.camelize('xunit')] = function (value$1194) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'xunit',
        Xunit$1016,
        value$1194
    ]);
};
Publishers$1029.prototype[util$940.camelize('zulip')] = function (value$1195) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'zulip',
        Zulip$1017,
        value$1195
    ]);
};
Publishers$1029.prototype[util$940.camelize('whitesource')] = function (value$1196) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'whitesource',
        Whitesource$1018,
        value$1196
    ]);
};
Publishers$1029.prototype[util$940.camelize('rundeck')] = function (value$1197) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'rundeck',
        Rundeck$1019,
        value$1197
    ]);
};
Publishers$1029.prototype[util$940.camelize('phabricator')] = function (value$1198) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'phabricator',
        Phabricator$1020,
        value$1198
    ]);
};
Publishers$1029.prototype[util$940.camelize('jdepend')] = function (value$1199) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'jdepend',
        Jdepend$1021,
        value$1199
    ]);
};
Publishers$1029.prototype[util$940.camelize('hipchat')] = function (value$1200) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'hipchat',
        Hipchat$1022,
        value$1200
    ]);
};
Publishers$1029.prototype[util$940.camelize('cucumber-testresult')] = function (value$1201) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cucumber-testresult',
        CucumberTestResult$1023,
        value$1201
    ]);
};
Publishers$1029.prototype[util$940.camelize('cucumber-reports')] = function (value$1202) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cucumber-reports',
        CucumberReports$1024,
        value$1202
    ]);
};
Publishers$1029.prototype[util$940.camelize('clamav')] = function (value$1203) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'clamav',
        Clamav$1025,
        value$1203
    ]);
};
Publishers$1029.prototype[util$940.camelize('artifactory')] = function (value$1204) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'artifactory',
        Artifactory$1026,
        value$1204
    ]);
};
Publishers$1029.prototype[util$940.camelize('cloudformation')] = function (value$1205) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cloudformation',
        CloudFormation$1027,
        value$1205
    ]);
};