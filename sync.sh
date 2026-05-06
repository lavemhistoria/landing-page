#!/bin/bash
echo "📤 Iniciando upload para o GitHub..."
git add .
git commit -m "Atualização automática via Antigravity"
git push origin main
echo "✅ Upload concluído!"
