#!/bin/sh
set -e

echo "Starting postbuild.sh..."

for i in $(seq 1 40); do
  if [ -d "dist/client" ]; then
    ls -la "dist/client" >/dev/null 2>&1 && break
  fi
  sleep 0.5
done

echo "dist/client found, preparing static files..."

# Clean root dist (remove old static files and server build)
rm -rf dist/assets dist/index.html dist/404.html dist/robots.txt dist/server

# Move client contents to root
for file in dist/client/*; do
  echo "Moving $file to dist/"
  mv "$file" "dist/"
done
rmdir dist/client

# Generate index.html and 404.html
CSS=$(ls dist/assets/styles-*.css 2>/dev/null | xargs basename)
JS=$(ls dist/assets/index-*.js 2>/dev/null | xargs basename)

if [ -z "$CSS" ] || [ -z "$JS" ]; then
  echo "ERROR: Could not find built assets"
  ls -la dist/assets/ 2>/dev/null || echo "dist/assets does not exist"
  exit 1
fi

echo "Found assets: $CSS, $JS"

cat > dist/index.html <<EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Visual Diary</title>
    <link rel="stylesheet" href="./assets/${CSS}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${JS}"></script>
  </body>
</html>
EOF

cp dist/index.html dist/404.html

echo "Generated index.html and 404.html for static hosting."
echo "Postbuild complete!"
