.PHONY: build-Typewriting-homepage

build-Typewriting-homepage:
	rm -rf out
	cd /Library/WebServer/Documents/typewritingdoc/ && npm run build
	npm run build
	mkdir out/docs
	cp -r /Library/WebServer/Documents/typewritingdoc/build/* /Library/WebServer/Documents/typewriting/typewriting.ai/out/docs/
	cp typewriting-logo.jpg out/
	cp sitemap-deploy.xml out/sitemap.xml
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out && sed -i '' 's|/_next|./_next|g' index.html
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out && sed -i '' 's|/_next|./_next|g' 404.html
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out/404 && sed -i '' 's|/_next|./_next|g' index.html
	zip -r typewriting.ai.zip out
	scp -i ~/.ssh/wit.works.pem typewriting.ai.zip ubuntu@ec2-52-10-14-40.us-west-2.compute.amazonaws.com:/var/www/html/typewriting.ai 
	ssh -i ~/.ssh/wit.works.pem ubuntu@ec2-52-10-14-40.us-west-2.compute.amazonaws.com "cd /var/www/html/typewriting.ai && unzip -o typewriting.ai.zip && rm typewriting.ai.zip"