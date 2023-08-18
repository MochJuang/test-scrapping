pipeline {
    agent any
    
    stages {
        stage("build") {
            steps {
                go version
            }
        }
        stage("test") {
            steps {
                echo "testing 1"
                echo "testing 2"
            }
        }
    }
}