pipeline {
    agent any

    environment {
        SLACK_CREDENTIAL = credentials("slack-credential")
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