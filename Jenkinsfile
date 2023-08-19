pipeline {
    agent any

    environment {
        SLACK_CREDENTIAL = credentials("slack-credential")
        JUANG_TEST = credentials("juang-test")
    }

    parameters {
        choice(name : "stage", choices : ["dev", "stage", "prod"], description: "Choose stage who will deploy")
    }
    
    stages {
        stage("build") {
            input {
                message "can we deploy"
                ok "Yes, of course"
                submitter "mochjuangpp"
                parameters {
                    choice(name : "stage", choices : ["dev", "stage", "prod"], description: "Choose stage who will deploy")
                }
            }
            steps {
                echo "build 1"
                script {
                    for (int i = 0; i < 5; i++) {
                        echo "script ke-"+i
                    }
                }
                echo 'Slack Credential : $SLACK_CREDENTIAL'
                echo 'Juang Username : $JUANG_TEST_USR'
                echo 'Juang Password : $JUANG_TEST_PSW'
            }
        }
        stage("test") {
            steps {
                echo "testing 1"
                echo "testing 2"
                echo "build to stage ${params.stage}"
            }
        }
    }

    post {
        failure {
            echo "adaa yang error gaess coba cek"
        }
        success {
            echo "success nih ci/cd nya"
        }
    }
}