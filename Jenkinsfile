pipeline {
    agent any

    environment {
        SLACK_CREDENTIAL = credentials("slack-credential")
        JUANG_TEST = credentials("juang-test")
    }
    
    stages {
        stage("build") {
            steps {
                echo "build 1"
                script {
                    for (int i = 0; i < 5; i++) {
                        echo "script ke-"+i
                    }
                }
                echo "Slack Credential : ${SLACK_CREDENTIAL}"
                echo "Juang Username : ${JUANG_TEST_USR}"
                echo "Juang Password : ${JUANG_TEST_PSW}"
            }
        }
        stage("test") {
            steps {
                echo "testing 1"
                echo "testing 2"
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