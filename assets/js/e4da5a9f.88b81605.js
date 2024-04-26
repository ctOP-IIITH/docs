"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[137],{2658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=t(4848),i=t(8453);const s={id:"installation-deployment",title:"Installation Guide"},r="Running the CTOP Application with Docker Compose",c={id:"installation-deployment",title:"Installation Guide",description:"This guide provides step-by-step instructions for running the CTOP application using Docker and Docker Compose. The CTOP application is structured into four main components: ctop-frontend, ctop-backend, postgres (as the database), and om2m (for IoT device management).",source:"@site/docs/installation-deployment.md",sourceDirName:".",slug:"/installation-deployment",permalink:"/installation-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"installation-deployment",title:"Installation Guide"},sidebar:"tutorialSidebar",previous:{title:"Functional Requirements Specification",permalink:"/functional-requirements"},next:{title:"Setup Development Environment",permalink:"/development-guide/setup-development-environment"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Run Docker Compose",id:"run-docker-compose",level:2},{value:"Verify the Services",id:"verify-the-services",level:2},{value:"Accessing the Application",id:"accessing-the-application",level:3},{value:"Monitoring Logs",id:"monitoring-logs",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"running-the-ctop-application-with-docker-compose",children:"Running the CTOP Application with Docker Compose"}),"\n",(0,o.jsx)(n.p,{children:"This guide provides step-by-step instructions for running the CTOP application using Docker and Docker Compose. The CTOP application is structured into four main components: ctop-frontend, ctop-backend, postgres (as the database), and om2m (for IoT device management)."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Before you begin, ensure you have the following installed on your system:"}),"\n",(0,o.jsx)(n.p,{children:"Docker: Installation Guide\nDocker Compose: Installation Guide"}),"\n",(0,o.jsx)(n.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Fetch the docker compose file"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl https://raw.githubusercontent.com/ctop-iiith/deployment/main/docker-compose.yml > docker-compose.yml\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["The ctop-backend service requires certain environment variables to be set for proper configuration. These can be provided directly in the docker-compose.yml file. Make sure you have the correct values for your setup, especially for ",(0,o.jsx)(n.code,{children:"DATABASE_URL, JWT_SECRET_KEY, JWT_REFRESH_SECRET_KEY, OM2M_URL, OM2M_USERNAME, and OM2M_PASSWORD."})]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The default values can be left as is."}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The ctop-frontend service requires the BACKEND_API_URL environment variable to be set for proper configuration. This should be set to the URL of the ctop-backend service. The default value is ",(0,o.jsx)(n.a,{href:"http://localhost:8000",children:"http://localhost:8000"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"run-docker-compose",children:"Run Docker Compose"}),"\n",(0,o.jsx)(n.p,{children:"Navigate to the directory containing your docker-compose.yml file and run the following command to start all services defined in the Docker Compose file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker-compose up -d\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command will download the necessary Docker images, create the defined networks, and start the services in detached mode."}),"\n",(0,o.jsx)(n.h2,{id:"verify-the-services",children:"Verify the Services"}),"\n",(0,o.jsx)(n.p,{children:"Once the command completes, verify that all the services are running correctly:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker-compose ps\n"})}),"\n",(0,o.jsx)(n.p,{children:'You should see all services listed as "Up".'}),"\n",(0,o.jsx)(n.h3,{id:"accessing-the-application",children:"Accessing the Application"}),"\n",(0,o.jsxs)(n.p,{children:["The frontend should be accessible via ",(0,o.jsx)(n.a,{href:"http://localhost",children:"http://localhost"})," or ",(0,o.jsx)(n.a,{href:"http://your-server-ip",children:"http://your-server-ip"}),".",(0,o.jsx)(n.br,{}),"\n","The backend API should be accessible via ",(0,o.jsx)(n.a,{href:"http://localhost:8000",children:"http://localhost:8000"})," or ",(0,o.jsx)(n.a,{href:"http://your-server-ip:8000",children:"http://your-server-ip:8000"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"monitoring-logs",children:"Monitoring Logs"}),"\n",(0,o.jsx)(n.p,{children:"To monitor the logs of any service for debugging purposes, use:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker-compose logs -f [service-name]\nReplace [service-name] with the name of the service you wish to monitor (e.g., ctop-frontend).\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);