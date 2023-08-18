pipeline {
    agent any
    
    stages {
        stage("build") {
            steps {
                echo "Hellow world 1"
                echo "Hellow world 2"
                git version
                node --version
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