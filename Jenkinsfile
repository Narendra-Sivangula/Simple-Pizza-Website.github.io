pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Define build steps here
                sh 'mvn clean install' // Example Maven build command
            }
        }
        stage('Test') {
            steps {
                // Define test steps here
                sh 'mvn test' // Example Maven test command
            }
        }
        stage('Deploy') {
            steps {
                // Define deployment steps here
                sh 'mvn deploy' // Example Maven deploy command
            }
        }
    }
}
