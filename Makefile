


up_front:
	cd front && docker-compose up --build -d
down_front:
	cd front && docker-compose down

up_back:
	cd back && docker-compose up --build -d
down_back:
	cd back && docker-compose down

up_server:
	docker-compose up --build -d
down_server:
	docker-compose down 


up_app: 
	make up_server && make up_back && make up_front

down_app: 
	make down_server && make down_back && make down_front


