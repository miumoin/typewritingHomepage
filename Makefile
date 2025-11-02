.PHONY: build-Typewriting-homepage

build-Typewriting-homepage:
	rm -rf out
	cd /Library/WebServer/Documents/typewriting.ai.docs/ && npm run build
	npm run build
	mkdir out/docs
	cp -r /Library/WebServer/Documents/typewriting.ai.docs/build/* /Library/WebServer/Documents/typewriting/typewriting.ai/out/docs/
	cp Typewriting-logo.jpg out/Typewriting-logo.jpg
	mv out/typewriting-logo.jpg out/Typewriting-logo.jpg
	cp sitemap-deploy.xml out/sitemap.xml
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out && sed -i '' 's|/_next|./_next|g' index.html
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out && sed -i '' 's|/_next|./_next|g' 404.html
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out/404 && sed -i '' 's|/_next|./_next|g' index.html
	zip -r typewriting.ai.zip out
	scp typewriting.ai.zip ubuntu@62.210.163.124:/var/www/html/typewriting/html/typewriting.ai 
	ssh ubuntu@62.210.163.124 "cd /var/www/html/typewriting/html/typewriting.ai && unzip -o typewriting.ai.zip && rm typewriting.ai.zip"