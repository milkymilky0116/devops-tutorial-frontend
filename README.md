# Devops tutorial with frontend

### Things to learn

- Docker Deploy / How to write dockerfile & docker-compose
- Github action / workflows
- Nginx config


name: deploy

on:
  push:
    branches: ["main"]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3.3.0
      - name: execute remote ssh & deploy backend server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.REMOTE_SSH_HOST }}
          username: ${{ secrets.REMOTE_SSH_USERNAME }}
          key: ${{ secrets.REMOTE_SSH_KEY }}
          port: ${{ secrets.REMOTE_SSH_PORT }}
          script: |
            cd ~/goraeph_deploy/devops-tutorial-frontend
            sudo git config --global --add safe.directory /home/***/goraeph_deploy/devops-tutorial-frontend
            sudo git pull
            docker-compose build
            docker-compose up -d
