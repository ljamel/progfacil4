# before execute this script "npm run build"
rsync --rsync-path="sudo rsync" -r ./build/* ubuntu@141.94.26.74:/var/www/html/master2/