![Angular](https://img.shields.io/badge/angular-~8.2.8-red?style=flat-square&logo=angular)

# Bienvenido al arquetipo de Darwin para Angular

Este arquetipo está generado con [Angular CLI](https://github.com/angular/angular-cli) versión 8.3.6 y configurado para funcionar con versiones de Angular que se ajustan a las reglas [semver](https://semver.org/) ~8.2.8.

## Prerrequisitos

Antes de comenzar, asegúrate de que tu entorno de desarrollo incluye Node.js® y el gestor de paquetes npm.

### Node.js

Darwin necesita Node.js versión 10.16.0 o superiores.

Para comprobar tu versión, ejecuta `node -v` en una terminal o consola.

### npm

Las aplicaciones Darwin dependen de Angular, Angular CLI y de las propias librerías de Darwin disponibles como paquetes de npm. Para poder descargar e instalar todos los paquetes necesarios debes tener instalado npm.

Para comprobar tu versión, ejecuta `npm -v` en una terminal o consola.

### Angular CLI

No es obligatorio tenerlo instalado de forma global, pero si muy recomendable si posteriormente lo quieres usar para hacer scaffolding de componentes.

El arquetipo se generó con la versión 8.3.6 del CLI, por eso es conveniente instalar dicha versión. Si existe alguna versión más actual del CLI que te gustaría instalar, siempre dentro de la versión 8.x.x, echa un vistazo [aquí.](#Versiones-de-Angular)

```
npm install -g @angular/cli@8.3.6
```

# Empezando a usar el arquetipo

## Paso 1: Instala las dependencias

> Este paso es posible haberlo hecho automáticamente ya, desde la herramienta CLI que proporcionamos para generar proyectos Front. En caso de error en la instalación de las dependencias Darwin, lee atentamente este apartado.

Los módulos de Darwin se encuentran alojados en Nexus, por esta razón debes tener configurado NPM correctamente. Asegúrate de que los espacios de nombres de los módulos de Darwin apuntan al registry de Nexus correctamente, este paso puedes realizarlo de dos maneras:

### Línea de comandos

Para realizar la configuración a través de línea de comandos ejecuta los siguientes comandos en tu terminal:

```
npm config set strict-ssl false
npm config set registry https://nexus.alm.europe.cloudcenter.corp/repository/npm-public/
```

### Manual

Para realizar la configuración de forma manual tienes que dirigirte al fichero .npmrc, el cual se encuentra ubicado en `C:\Users\<TU-USUARIO>`. En caso de que no visualices este archivo debes crearlo y añadir las líneas que se muestran a continuación, en el caso de que si que exista comprueba que no las tengas y añádelas si aún no las tienes:

```
strict-ssl=false
registry=https://nexus.alm.europe.cloudcenter.corp/repository/npm-public/
```

Para finalizar, tras realizar la anterior configuración, ejecuta el siguiente comando en la raíz de tu proyecto para instalar todas las dependencias:

```
npm install

```
## Paso 3: Levanta Darwin Fake API y sirve la aplicación

### [Fake API](#Darwin-Fake-API)

Es una API REST basada en [json-server](https://github.com/typicode/json-server) capaz de servir ficheros estáticos y ficheros JSON, perfecta para simular respuestas de peticiones AJAX al backend.

Ejecuta el siguiente comando para levantarla

```
npm run serve:api
```

### Sirve la aplicación

Ejecuta el siguiente comando y navega a la dirección http://localhost:4200/?token=fake_token. La aplicación se recargará automáticamente si haces algún cambio en los ficheros fuentes.

```
npm run serve:app
```

Si quieres ejecutar los dos comandos anteriores simultáneamente y en una sola consola puedes hacerlo a través de

```
npm start
```

> Una vez que hayas levantado el arquetipo lee atentamente la información que se muestra en tu navegador.

# Desarrollando tu proyecto

## **¡Importante!**

Una vez que hayas levantado el arquetipo **¡lee atentamente la información que se muestra en tu navegador!**

## Scaffolding

Si has instalado [Angular CLI](https://github.com/angular/angular-cli) de forma global puedes ejecutar el siguiente comando para generar un nuevo componente. 

```
ng generate component component-name
```

También puedes usar:

```
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Build

Ejecuta `ng build` o `npm run build` para construir el proyecto. Los artefactos se generarán en el directorio  `dist/`. El `build` se ejecutará con el flag `--prod` que es un *shortcut* de `--configuration=production`. De este modo se construirá en modo producción.

## Ejecutar tests unitarios

Ejecuta `ng test` o `npm run test` para ejecutar los tests unitarios vía [Karma](https://karma-runner.github.io).

### A tener en cuenta para los test unitarios:

 > Los test unitarios hacen uso de la utilidad `configureTestingModule` que Angular ofrece para poder configurar el módulo a probar. Se importan módulos como `HttpClientTestingModule` de Angular, `ConfigTestingModule`, `SecurityTestingModule` y `LoggerTestingModule` de Darwin. Estos módulos crean providers mockeados de los servicios que se ofrecen en cada módulo real, para que puedan ser inyectados y los test puedan ejecutarse sin que el compilador se queje.

## Ejecutar tests end-to-end

Para poder correr los test e2e en local se necesita tener levantada la fake API. Ejecuta el comando `npm run serve:api` y posteriormente `ng e2e` o `npm run e2e` para ejecutar los tests end-to-end vía [Protractor](http://www.protractortest.org/). Si tienes algún problema al ejecutarlos lee el apartado siguiente.

### A tener en cuenta para los tests e2e:

 > Tener levantada la fake API no será necesario si hay una API real de pruebas y dicha aplicación está atacando contra sus servicios.

 > Si obtienes un error al ejecutar el comando `e2e`, lo primero comprueba que tienes la  carpeta `<root>\node_modules\protractor\node_modules\webdriver-manager\selenium` con el driver de Chrome en su interior. Si la carpeta no existe ejecuta el comando `./node_modules/.bin/webdriver-manager update` para descargar el driver necesario para manejar la última versión de Chrome. Más información [aquí](https://github.com/angular/webdriver-manager/blob/legacy/docs/versions.md).

 > Si obtienes un error con respecto a la versión del Chrome driver, debes saber que los tests e2e están configurados para ser ejecutados en Chrome real. Dependiendo de la versión que tengas de este navegador, será necesario configurar la [propiedad `chromeDriver`](https://github.com/angular/protractor/blob/5.4.1/lib/config.ts#L78) en el fichero `protractor.conf.js` con el path correcto. Este path debe apuntar al ejecutable del Chrome driver que necesites. Puedes encontrar diferentes versiones del driver [aquí](http://chromedriver.chromium.org/downloads).

 > También puedes optar por otras configuraciones que necesites, como que los test corran en [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome#cli), en vez de en un Chrome real.

## Darwin Fake API

Todo lo que tiene que ver con Darwin Fake API se encuentra bajo la carpeta `<root>/api` del proyecto. El objetivo de esta herramienta es proporcionar una API REST a los desarrolladores que necesitan un backend rápido para poder mockear servicios. Será la encargada de servir el fichero estático de configuración ([config.json](./api/public/config.json), además de otras respuestas en formato JSON necesarias para el playground.

Esta basada en [json-server](https://github.com/typicode/json-server), por lo que consulta su repositorio Github para saber como utilizarla y sacarle todo el partido que necesites.

Ejecuta el siguiente comando para levantar la API en puerto 3000 bajo la siguiente ruta `http://localhost:3000/api`
 ```
 npm run serve:api
 ```

Darwin Fake API está compuesta por:

- [`api-server.js`](./api/api-server.js). Es el fichero más importante de la fake API, donde se encuentra todo su código. Puedes modificarlo a tu disposición para simular las peticiones, mientras no esté disponible una API real.

- El fichero `db.json` simula una pequeña base de datos en formato JSON, donde se guardarán los *payload* de las peticiones POST. Para consultar su contenido completo puedes acceder a `http://localhost:3000/api/db` 

- Los ficheros estáticos servidos por la API se encuentran en la carpeta `public` y puedes acceder a ellos a través de `http://localhost:3000/<file_name.extension>`. Por ejemplo [`http://localhost:3000/config.json`](http://localhost:3000/config.json)


Se han configurado los siguientes *endpoints*:

```
POST /api/security/tokens/refresh   # Refresca un fake token

GET  /api/logger/logs               # lista de logs
GET  /api/logger/logs/:id           # log por id
POST /api/logger/log                # crea un log en la base de datos (fichero db.json)
```

> Recuerda que puedes modificar el fichero [`api-server.js`](./api/api-server.js) para poder simular llamadas a una API real, mientras los microservicios no estes desarrollados. 

## Proxying a un servidor backend. El archivo proxy.conf.json

El arquetipo tiene configurado un proxy para desviar ciertas peticiones a URLs o *endpoints*, hacia un servidor backend específico. Esta es una funcionalidad que se puede [configurar](https://angular.io/guide/build#proxying-to-a-backend-server) dentro de un proyecto Angular por medio del archivo [proxy.conf.json](./proxy.conf.json) y que es ofrecida a través de [Webpack](https://webpack.js.org/configuration/dev-server/#devserverproxy), el bundler que usa Angular en su interior.

Concretamente se ha configurado para que cualquier petición a un *endpoint* del tipo:

- `http://localhost:4200/api/**` sean redirigidas hacia `http://localhost:3000/api/**`
- `http://localhost:4200/config/**` sean redirigidas hacia `http://localhost:3000/**`

Con esto se obtiene el beneficio de, mientras se está desarrollando, poder hacer peticiones a la misma dirección y puerto en donde se está sirviendo la app y que sean redirigidas a donde interese. 

Podrás configurar la propiedad [*endpoint*](#Propiedad-endpoint) que tienen ciertos módulos, con URLs relativas, además de absolutas, siempre que te interese.

Se muestra un pequeño ejemplo que hará una petición a `http://localhost:4200/api/security/tokens/**` y será redirigida a `http://localhost:3000/api/security/tokens/**` 

```json
  "security": {
    "endpoint": "/api/security/tokens"
  }
```

En este otro ejemplo la petición se hará directamente a `http://localhost:3000/api/security/tokens/**` sin redirecciones

```json
  "security": {
    "endpoint": "http://localhost:3000/api/security/tokens"
  }
```

> Recuerda que estas redirecciones sólo están activas mientras estés desarrollando la app y la sirvas con `npm start` o `npm run serve`. 

## Configuración del arquetipo para usar un token real

Según avance el desarrollo de tu proyecto necesitarás configurarlo para que obtenga un token real, y pueda ser usado para llamar a los servicios que necesiten una autorización. Para esto se hará uso de un Servicio Común llamado SCC.

Abre el archivo [config.json](api/public/config.json). Necesitas configurar la propiedad *security.endpoint*([*](#Propiedad-endpoint)) con una ruta adecuada.

Las rutas de los servicios comunes, incluyendo las del servicio SCC, las puedes encontrar [aquí](https://confluence.ci.gsnet.corp/display/NARQREF/5.3.2.4.1.-+Rutas+Servicios+Comunes+Darwin). Asegúrate de usar la adecuada a tu proyecto.

Por ejemplo, para obtener un token en el entorno de CERT (desarrollo) para el canal Intranet, deberías configurar el siguiente *endpoint**:

```json
  "security": {
    "endpoint": "https://sccnuar.santander.dev.corp/sccofi"
  },
```
### Propiedad endpoint

Esta propiedad está presente en la configuración de ciertos módulos que necesiten hacer peticiones AJAX, como *Security Module* o *Logger Module* y debe cumplir una expresión regular bastante estricta:
- El protocolo es optativo. En caso de existir, debe ser *http* o *https*.
- Si se especifica un protocolo, se debe especificar tanto un dominio como un subdominio (excepto *localhost* que sí está permitido).
- Puede contener un número de puerto hasta el 65535.
- No puede finalizar con una barra.
- Puede ser un path relativo (sin protocolo) y comenzar por barra.
- No puede comenzar por doble barra.

Ejemplos **correctos**:
```
http://endpoint.com/path
https://endpoint.com/path
https://end-point.com/path
https://endpoint.com/path/subpath/morepath
https://localhost:3000/path
/api/path/subpath
```

Ejemplos **incorrectos**:
```
https://endpoint.com/path/      # fijate que la barra final no está permitida
https://endpoint/path
https://end-point/path
//endpoint.com/path
api/path/subpath
```

## Versiones de Angular

Para generar este arquetipo se utilizó la versión 8.3.6 de [Angular CLI](https://github.com/angular/angular-cli).

Las dependencias del arquetipo con respecto a los paquetes de Angular son las versiones que cumplen con el [semver](https://semver.org/) ~8.2.8. Esto puede comprobarse en el archivo `package.json`.

Es posible que a la hora de leer esta documentación exista una versión superior. Podrás instalar/actualizar sin problemas, cualquier versión de Angular o del CLI que cumpla con la versión ~8.2.8 (versiones < 8.3.0).

Si la versión que te gustaría instalar es >= 8.3.0 y < 9.0.0, según las reglas [semver](https://semver.org/) no deberían aparecer *breaking changes* cuando lo que incrementa es la parte *minor* de la versión, por lo que ¡el equipo de arquitectura te anima a probarlo! y si tienes algún problema comunícanoslo para que podamos seguir mejorando el arquetipo. 

Si la versión que te gustaría instalar es >= 9.0.0, no te aseguramos que vaya a funcionar y es posible que la tierra implosione  ;)

## Navegadores legacy
Los comandos `ng serve`, `ng test`, y `ng e2e` generan una *build* en formato ES2015 que no puede correr en navegadores antiguos que no soporten los [módulos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) de javascript. Si necesitas habilitar el comando `ng serve` para un navegador como IE11, échale un vistazo a la siguiente documentación de Angular:
 - [Differential Loading](https://angular.io/guide/deployment#differential-loading)
 - [Local Development in older browsers](https://angular.io/guide/deployment#local-development-in-older-browsers)
 

