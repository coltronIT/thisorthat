# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

DEV notes
---------
when building image make sure you build base, and then the other two. and because the import is local (currently), start off with

BASE
---------
DOCKER_BUILDKIT=0 docker build -f Dockerfile.dev -t thisorthatfrontend:dev .

OR
POWERSHELL
----------
$env:DOCKER_BUILDKIT=0; docker build -f Dockerfile.dev -t thisorthatfrontend:dev .
