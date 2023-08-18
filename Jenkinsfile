pipeline {
    agent any
    
    stages {
        stage("build") {
            steps {
                echo "build 1"
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
        failur {
            echo "adaa yang error gaess coba cek"
        }
        success {
            echo "success nih ci/cd nya"
        }
    }
}