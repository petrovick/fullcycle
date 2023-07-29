
```
docker build -t gogrpc:latest .
```

docker run -it gogrpc:latest bash


docker run -it -v $(pwd):/usr/src/app gogrpc:latest bash

docker run -it -v $(pwd):/usr/src/app gogrpc bash