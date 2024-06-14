# Path-PHP Documentation




## Build

Build your docker container :

    docker build -t path-doc .

Run it (name can be changed):

    # On Linux
    docker run -v "$(pwd)":/path-php-doc -p 3000:3000 --name path-doc path-doc

    # On Windows
    docker run -d -v "%cd%:/path-php-doc" -p 3000:3000 -p 4000:4000 --name path-doc path-doc

Execute it and install dependencies :

    docker exec -it path-doc bash

The project will be accessible locally at : http://localhost:3000/


#### Run on a built container

If you've already built your container, start it and run with :

    docker start path-doc
    docker exec -it path-doc bash
    yarn dev

To generate :

    docker exec -it path-doc bash
    yarn generate