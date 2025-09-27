# Clone your repository
git clone https://github.com/afikpakossou-ai/NC-Telepsychiatry-Services

# Create src directory
mkdir src
mkdir src/components

# Move files
mv main.tsx src/
mv App.tsx src/
mv *.tsx src/components/

# Commit changes
git add .
git commit -m "Restructure project for Vite deployment"
git push origin main
