dreplica:
	kubectl describe replicaset $1

all:
	kubectl apply -f ./k8s/configmap-env.yaml
	kubectl apply -f ./k8s/configmap-family-env.yaml
	kubectl apply -f ./k8s/deployment.yaml
	kubectl apply -f ./k8s/hpa.yaml
	kubectl apply -f ./k8s/metrics-server.yaml
	kubectl apply -f ./k8s/persistent.volume.claim.yaml
	kubectl apply -f ./k8s/secret.yaml
	kubectl apply -f ./k8s/service.loadbalancer.yaml