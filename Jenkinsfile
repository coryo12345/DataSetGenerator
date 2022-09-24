pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t datasetgenerator .'
            }
        }
        stage('Test') {
            steps {
                echo 'Would run unit tests here...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'docker stop datasetgenerator || true'
                sh 'docker rm datasetgenerator || true'
                sh 'docker run -d --name datasetgenerator \
                    --restart always \
                    --network=webnetwork \
                    datasetgenerator'
            }
        }
    }
}
