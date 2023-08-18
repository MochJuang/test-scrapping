pipeline {
    agent any
    
    stages {
        stage("build") {
            steps {
                echo "Hellow world 1"
                echo "Hellow world 2"
                go version
                node -v
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