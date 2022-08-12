if [ -z "$1" ]
  then
    echo "No manifest URL supplied: we use default instead: http://localhost:3004/remoteEntry.js"
    CURL -X POST -d "manifest=http://localhost:3004/remoteEntry.js" http://localhost:3007/manifest
  else
    echo "Manifest URL supplied: "$1
    CURL -X POST -d "manifest=$1" http://localhost:3007/manifest
fi
