import { Icon } from "./Icon";
import { useCopyWithAnalytics } from "@hooks/useCopyWithAnalytics";

interface Command {
  cmd: string;
  desc: string;
}

interface Section {
  title: string;
  icon: string;
  color: string;
  commands: Command[];
}

interface QuickRefItem {
  term: string;
  desc: string;
}

interface ColorClass {
  badge: string;
  header: string;
  border: string;
}

const DockerCheatSheet = () => {
  const { copiedCmd, copyToClipboard } = useCopyWithAnalytics("docker", "DevOps");

  const sections: Section[] = [
    {
      title: "Container Lifecycle",
      icon: "box",
      color: "blue",
      commands: [
        { cmd: "docker create image", desc: "Create container from image" },
        { cmd: "docker start container", desc: "Start a container" },
        { cmd: "docker run image", desc: "Create and start container" },
        { cmd: "docker run -d image", desc: "Run in detached mode" },
        { cmd: "docker run -it image sh", desc: "Run with interactive shell" },
        { cmd: "docker run --name name image", desc: "Run with custom name" },
        { cmd: "docker run -p 8080:80 image", desc: "Map port host:container" },
        { cmd: "docker run -v /host:/container image", desc: "Mount volume" },
        { cmd: "docker stop container", desc: "Stop a container" },
        { cmd: "docker restart container", desc: "Restart a container" },
        { cmd: "docker rm container", desc: "Remove a container" },
        { cmd: "docker rm -f container", desc: "Force remove running" },
      ],
    },
    {
      title: "Container Info",
      icon: "search",
      color: "cyan",
      commands: [
        { cmd: "docker ps", desc: "List running containers" },
        { cmd: "docker ps -a", desc: "List all containers" },
        { cmd: "docker ps -q", desc: "List container IDs only" },
        { cmd: "docker logs container", desc: "View container logs" },
        { cmd: "docker logs -f container", desc: "Follow log output" },
        { cmd: "docker logs --tail 100 container", desc: "Last 100 lines" },
        { cmd: "docker inspect container", desc: "Detailed container info" },
        { cmd: "docker top container", desc: "Show running processes" },
        { cmd: "docker stats", desc: "Live resource usage" },
        { cmd: "docker port container", desc: "Show port mappings" },
        { cmd: "docker diff container", desc: "Show filesystem changes" },
      ],
    },
    {
      title: "Container Interaction",
      icon: "terminal",
      color: "green",
      commands: [
        {
          cmd: "docker exec -it container sh",
          desc: "Open shell in container",
        },
        {
          cmd: "docker exec -it container bash",
          desc: "Open bash in container",
        },
        {
          cmd: "docker exec container command",
          desc: "Run command in container",
        },
        { cmd: "docker attach container", desc: "Attach to running container" },
        {
          cmd: "docker cp container:/path /local",
          desc: "Copy from container",
        },
        { cmd: "docker cp /local container:/path", desc: "Copy to container" },
        { cmd: "docker pause container", desc: "Pause a container" },
        { cmd: "docker unpause container", desc: "Unpause a container" },
        { cmd: "docker wait container", desc: "Wait for container to stop" },
        { cmd: "docker kill container", desc: "Kill a container" },
      ],
    },
    {
      title: "Images",
      icon: "layers",
      color: "purple",
      commands: [
        { cmd: "docker images", desc: "List all images" },
        {
          cmd: "docker images -a",
          desc: "List all images (incl. intermediate)",
        },
        { cmd: "docker pull image:tag", desc: "Pull image from registry" },
        { cmd: "docker push image:tag", desc: "Push image to registry" },
        {
          cmd: "docker build -t name:tag .",
          desc: "Build image from Dockerfile",
        },
        {
          cmd: "docker build -f Dockerfile.dev .",
          desc: "Build with custom file",
        },
        { cmd: "docker tag image:tag newimage:tag", desc: "Tag an image" },
        { cmd: "docker rmi image", desc: "Remove an image" },
        { cmd: "docker rmi -f image", desc: "Force remove image" },
        { cmd: "docker history image", desc: "Show image history" },
        { cmd: "docker save image > file.tar", desc: "Save image to tar" },
        { cmd: "docker load < file.tar", desc: "Load image from tar" },
      ],
    },
    {
      title: "Volumes",
      icon: "hard-drive",
      color: "orange",
      commands: [
        { cmd: "docker volume create name", desc: "Create a volume" },
        { cmd: "docker volume ls", desc: "List all volumes" },
        { cmd: "docker volume inspect name", desc: "Volume details" },
        { cmd: "docker volume rm name", desc: "Remove a volume" },
        { cmd: "docker volume prune", desc: "Remove unused volumes" },
        { cmd: "docker run -v vol:/path image", desc: "Mount named volume" },
        { cmd: "docker run -v /host:/path image", desc: "Bind mount" },
        { cmd: "docker run -v /path image", desc: "Anonymous volume" },
        {
          cmd: "docker run --mount source=vol,target=/path",
          desc: "Mount syntax",
        },
      ],
    },
    {
      title: "Networks",
      icon: "network",
      color: "cyan",
      commands: [
        { cmd: "docker network create name", desc: "Create a network" },
        { cmd: "docker network ls", desc: "List all networks" },
        { cmd: "docker network inspect name", desc: "Network details" },
        { cmd: "docker network rm name", desc: "Remove a network" },
        { cmd: "docker network prune", desc: "Remove unused networks" },
        {
          cmd: "docker network connect net container",
          desc: "Connect container",
        },
        {
          cmd: "docker network disconnect net container",
          desc: "Disconnect container",
        },
        { cmd: "docker run --network=name image", desc: "Run on network" },
        { cmd: "docker run --network=host image", desc: "Use host network" },
      ],
    },
    {
      title: "Docker Compose",
      icon: "workflow",
      color: "blue",
      commands: [
        { cmd: "docker compose up", desc: "Create and start services" },
        { cmd: "docker compose up -d", desc: "Start in detached mode" },
        { cmd: "docker compose up --build", desc: "Rebuild before starting" },
        { cmd: "docker compose down", desc: "Stop and remove services" },
        { cmd: "docker compose down -v", desc: "Also remove volumes" },
        { cmd: "docker compose ps", desc: "List running services" },
        { cmd: "docker compose logs", desc: "View service logs" },
        { cmd: "docker compose logs -f service", desc: "Follow service logs" },
        { cmd: "docker compose exec service sh", desc: "Shell into service" },
        { cmd: "docker compose build", desc: "Build services" },
        { cmd: "docker compose pull", desc: "Pull service images" },
        { cmd: "docker compose restart", desc: "Restart services" },
      ],
    },
    {
      title: "Dockerfile",
      icon: "file-code",
      color: "yellow",
      commands: [
        { cmd: "FROM image:tag", desc: "Base image" },
        { cmd: "WORKDIR /app", desc: "Set working directory" },
        { cmd: "COPY . .", desc: "Copy files to image" },
        { cmd: "ADD url /dest", desc: "Add files (supports URLs)" },
        { cmd: "RUN command", desc: "Run command during build" },
        { cmd: 'CMD ["cmd", "arg"]', desc: "Default command" },
        { cmd: 'ENTRYPOINT ["cmd"]', desc: "Container entrypoint" },
        { cmd: "ENV KEY=value", desc: "Set environment variable" },
        { cmd: "ARG NAME=default", desc: "Build-time variable" },
        { cmd: "EXPOSE 8080", desc: "Document exposed port" },
        { cmd: "VOLUME /data", desc: "Create mount point" },
        { cmd: "USER username", desc: "Set runtime user" },
      ],
    },
    {
      title: "Registry & Login",
      icon: "cloud",
      color: "purple",
      commands: [
        { cmd: "docker login", desc: "Login to Docker Hub" },
        {
          cmd: "docker login registry.example.com",
          desc: "Login to custom registry",
        },
        { cmd: "docker logout", desc: "Logout from registry" },
        { cmd: "docker search term", desc: "Search Docker Hub" },
        { cmd: "docker pull user/repo:tag", desc: "Pull from registry" },
        { cmd: "docker push user/repo:tag", desc: "Push to registry" },
      ],
    },
    {
      title: "System & Cleanup",
      icon: "trash",
      color: "red",
      commands: [
        { cmd: "docker system df", desc: "Show disk usage" },
        { cmd: "docker system prune", desc: "Remove unused data" },
        { cmd: "docker system prune -a", desc: "Remove all unused data" },
        { cmd: "docker container prune", desc: "Remove stopped containers" },
        { cmd: "docker image prune", desc: "Remove dangling images" },
        { cmd: "docker image prune -a", desc: "Remove unused images" },
        { cmd: "docker builder prune", desc: "Remove build cache" },
        { cmd: "docker system info", desc: "System-wide information" },
        { cmd: "docker version", desc: "Show Docker version" },
      ],
    },
    {
      title: "Run Options",
      icon: "settings",
      color: "gray",
      commands: [
        { cmd: "-d, --detach", desc: "Run in background" },
        { cmd: "-it", desc: "Interactive with TTY" },
        { cmd: "-p host:container", desc: "Port mapping" },
        { cmd: "-v host:container", desc: "Volume mapping" },
        { cmd: "-e KEY=val", desc: "Environment variable" },
        { cmd: "--env-file file", desc: "Load env from file" },
        { cmd: "--name name", desc: "Container name" },
        { cmd: "--rm", desc: "Remove on exit" },
        { cmd: "--restart=always", desc: "Restart policy" },
        { cmd: "-m 512m", desc: "Memory limit" },
        { cmd: "--cpus=2", desc: "CPU limit" },
        { cmd: "-w /app", desc: "Working directory" },
      ],
    },
    {
      title: "Multi-Stage Builds",
      icon: "layers",
      color: "green",
      commands: [
        { cmd: "FROM node:18 AS build", desc: "Name build stage" },
        { cmd: "FROM nginx:alpine", desc: "Final stage" },
        {
          cmd: "COPY --from=build /app/dist /usr/share/nginx/html",
          desc: "Copy from stage",
        },
        { cmd: "docker build --target build .", desc: "Build specific stage" },
      ],
    },
  ];

  const quickRef: QuickRefItem[] = [
    { term: "-d", desc: "Detached mode" },
    { term: "-it", desc: "Interactive TTY" },
    { term: "-p", desc: "Port mapping" },
    { term: "-v", desc: "Volume mount" },
    { term: "-e", desc: "Environment var" },
    { term: "--rm", desc: "Auto-remove" },
  ];

  const colorClasses: Record<string, ColorClass> = {
    purple: {
      badge: "bg-purple-subtle text-purple",
      header: "text-purple",
      border: "border-purple/20",
    },
    blue: {
      badge: "bg-blue-subtle text-blue",
      header: "text-blue",
      border: "border-blue/20",
    },
    green: {
      badge: "bg-green-subtle text-green",
      header: "text-green",
      border: "border-green/20",
    },
    orange: {
      badge: "bg-orange-subtle text-orange",
      header: "text-orange",
      border: "border-orange/20",
    },
    cyan: {
      badge: "bg-cyan-subtle text-cyan",
      header: "text-cyan",
      border: "border-cyan/20",
    },
    yellow: {
      badge: "bg-yellow-subtle text-yellow",
      header: "text-yellow",
      border: "border-yellow/20",
    },
    red: {
      badge: "bg-red-subtle text-red",
      header: "text-red",
      border: "border-red/20",
    },
    gray: {
      badge: "bg-gray-subtle text-gray",
      header: "text-gray",
      border: "border-gray/20",
    },
  };

  return (
    <div className="min-h-screen bg-bg-primary px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 pt-24 md:pt-28 print:p-4 print:pt-4">
      {/* Header */}
      <header className="max-w-[1800px] mx-auto mb-8 print:mb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue/20 to-cyan/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="box"
                  className="w-7 h-7 text-blue print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                Docker Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Complete reference for Docker commands
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 print:hidden">
            <div className="text-xs text-text-muted px-4 py-2 bg-bg-secondary rounded-lg border border-border-default">
              Press{" "}
              <kbd className="mx-1 px-1.5 py-0.5 bg-bg-tertiary rounded text-text-secondary">
                Ctrl
              </kbd>
              +
              <kbd className="px-1.5 py-0.5 bg-bg-tertiary rounded text-text-secondary">
                P
              </kbd>{" "}
              to print
            </div>
          </div>
        </div>
      </header>

      {/* Quick Reference Bar */}
      <div className="max-w-[1800px] mx-auto mb-8 print:mb-4">
        <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border-default rounded-2xl p-5 print:p-3 print:rounded-lg">
          <div className="flex items-center gap-2 mb-4 print:mb-2">
            <Icon name="terminal" className="w-4 h-4 text-blue" />
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider print:text-[10px]">
              Common Flags
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 print:gap-x-4 print:gap-y-1">
            {quickRef.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm print:text-[10px]"
              >
                <code className="px-2 py-1 bg-bg-tertiary/80 rounded-md text-blue font-mono text-xs print:text-[9px] print:px-1 border border-border-subtle">
                  {item.term}
                </code>
                <span className="text-text-secondary">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 print:grid-cols-4 print:gap-3">
          {sections.map((section, idx) => (
            <section
              key={idx}
              className={`bg-bg-secondary/50 backdrop-blur-sm border border-border-default rounded-2xl overflow-hidden print:rounded-lg print:break-inside-avoid hover:border-border-default/80 transition-all duration-300 ${colorClasses[section.color].border}`}
            >
              {/* Section Header */}
              <div className="px-4 py-3 border-b border-border-subtle flex items-center gap-3 print:px-3 print:py-2">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center print:w-5 print:h-5 ${colorClasses[section.color].badge}`}
                >
                  <Icon
                    name={section.icon}
                    className="w-4 h-4 print:w-3 print:h-3"
                  />
                </div>
                <h2
                  className={`font-semibold text-sm print:text-[10px] ${colorClasses[section.color].header}`}
                >
                  {section.title}
                </h2>
              </div>

              {/* Commands */}
              <div className="divide-y divide-border-subtle">
                {section.commands.map((item, i) => (
                  <div
                    key={i}
                    className="group px-4 py-2.5 hover:bg-bg-tertiary/30 transition-colors print:px-3 print:py-1.5 cursor-pointer"
                    onClick={() => copyToClipboard(item.cmd)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <code className="block text-xs font-mono text-blue break-all print:text-[8px] print:leading-tight leading-relaxed whitespace-pre-wrap">
                        {item.cmd}
                      </code>
                      <button
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-bg-elevated rounded print:hidden flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.cmd);
                        }}
                        title="Copy command"
                      >
                        <Icon
                          name={copiedCmd === item.cmd ? "check" : "copy"}
                          className={`w-3.5 h-3.5 ${copiedCmd === item.cmd ? "text-green" : "text-text-muted"}`}
                        />
                      </button>
                    </div>
                    <p className="text-[11px] text-text-muted leading-snug mt-1 print:text-[7px] print:leading-tight print:mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1800px] mx-auto mt-10 pt-6 border-t border-border-default print:mt-4 print:pt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted print:text-[8px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center">
              <Icon name="box" className="w-4 h-4 text-blue" />
            </div>
            <span className="text-text-secondary">Docker Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <a
              href="https://docs.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>docs.docker.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DockerCheatSheet;
