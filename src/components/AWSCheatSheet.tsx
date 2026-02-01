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

const AWSCheatSheet = () => {
  const { copiedCmd, copyToClipboard } = useCopyWithAnalytics("aws", "DevOps");

  const sections: Section[] = [
    {
      title: "AWS CLI Basics",
      icon: "terminal",
      color: "purple",
      commands: [
        { cmd: "aws configure", desc: "Set up AWS credentials" },
        { cmd: "aws configure list", desc: "Show current configuration" },
        { cmd: "aws sts get-caller-identity", desc: "Verify current identity" },
        { cmd: "aws --version", desc: "Check AWS CLI version" },
        { cmd: "aws help", desc: "Get help" },
        { cmd: "aws <service> help", desc: "Get service-specific help" },
        { cmd: "aws configure set region us-east-1", desc: "Set default region" },
        { cmd: "aws configure get region", desc: "Get current region" },
      ],
    },
    {
      title: "IAM",
      icon: "users",
      color: "blue",
      commands: [
        { cmd: "aws iam list-users", desc: "List all IAM users" },
        { cmd: "aws iam create-user --user-name <name>", desc: "Create new user" },
        { cmd: "aws iam delete-user --user-name <name>", desc: "Delete user" },
        { cmd: "aws iam list-roles", desc: "List all roles" },
        { cmd: "aws iam list-policies", desc: "List all policies" },
        { cmd: "aws iam attach-user-policy --user-name <name> --policy-arn <arn>", desc: "Attach policy to user" },
        { cmd: "aws iam create-access-key --user-name <name>", desc: "Create access key" },
        { cmd: "aws iam list-groups", desc: "List all groups" },
        { cmd: "aws iam create-role --role-name <name> --assume-role-policy-document file://policy.json", desc: "Create role" },
        { cmd: "aws iam get-role --role-name <name>", desc: "Get role details" },
      ],
    },
    {
      title: "S3",
      icon: "hard-drive",
      color: "green",
      commands: [
        { cmd: "aws s3 ls", desc: "List all buckets" },
        { cmd: "aws s3 ls s3://<bucket>", desc: "List bucket contents" },
        { cmd: "aws s3 mb s3://<bucket>", desc: "Create bucket" },
        { cmd: "aws s3 rb s3://<bucket>", desc: "Remove empty bucket" },
        { cmd: "aws s3 rb s3://<bucket> --force", desc: "Remove bucket with contents" },
        { cmd: "aws s3 cp <file> s3://<bucket>/", desc: "Upload file" },
        { cmd: "aws s3 cp s3://<bucket>/<file> ./", desc: "Download file" },
        { cmd: "aws s3 sync <dir> s3://<bucket>/", desc: "Sync directory to S3" },
        { cmd: "aws s3 rm s3://<bucket>/<file>", desc: "Delete file" },
        { cmd: "aws s3 presign s3://<bucket>/<file>", desc: "Generate presigned URL" },
        { cmd: "aws s3api put-bucket-versioning --bucket <bucket> --versioning-configuration Status=Enabled", desc: "Enable versioning" },
        { cmd: "aws s3api get-bucket-policy --bucket <bucket>", desc: "Get bucket policy" },
      ],
    },
    {
      title: "EC2",
      icon: "server",
      color: "orange",
      commands: [
        { cmd: "aws ec2 describe-instances", desc: "List all instances" },
        { cmd: "aws ec2 run-instances --image-id <ami> --instance-type t2.micro --key-name <key>", desc: "Launch instance" },
        { cmd: "aws ec2 start-instances --instance-ids <id>", desc: "Start instance" },
        { cmd: "aws ec2 stop-instances --instance-ids <id>", desc: "Stop instance" },
        { cmd: "aws ec2 terminate-instances --instance-ids <id>", desc: "Terminate instance" },
        { cmd: "aws ec2 describe-images --owners amazon", desc: "List AMIs" },
        { cmd: "aws ec2 create-key-pair --key-name <name>", desc: "Create key pair" },
        { cmd: "aws ec2 describe-security-groups", desc: "List security groups" },
        { cmd: "aws ec2 create-security-group --group-name <name> --description <desc>", desc: "Create security group" },
        { cmd: "aws ec2 authorize-security-group-ingress --group-id <id> --protocol tcp --port 22 --cidr 0.0.0.0/0", desc: "Add inbound rule" },
        { cmd: "aws ec2 describe-instance-status --instance-ids <id>", desc: "Get instance status" },
      ],
    },
    {
      title: "VPC",
      icon: "network",
      color: "cyan",
      commands: [
        { cmd: "aws ec2 describe-vpcs", desc: "List all VPCs" },
        { cmd: "aws ec2 create-vpc --cidr-block 10.0.0.0/16", desc: "Create VPC" },
        { cmd: "aws ec2 delete-vpc --vpc-id <id>", desc: "Delete VPC" },
        { cmd: "aws ec2 describe-subnets", desc: "List all subnets" },
        { cmd: "aws ec2 create-subnet --vpc-id <id> --cidr-block 10.0.1.0/24", desc: "Create subnet" },
        { cmd: "aws ec2 describe-internet-gateways", desc: "List internet gateways" },
        { cmd: "aws ec2 create-internet-gateway", desc: "Create internet gateway" },
        { cmd: "aws ec2 attach-internet-gateway --internet-gateway-id <id> --vpc-id <id>", desc: "Attach IGW to VPC" },
        { cmd: "aws ec2 describe-route-tables", desc: "List route tables" },
        { cmd: "aws ec2 create-nat-gateway --subnet-id <id> --allocation-id <eip>", desc: "Create NAT gateway" },
      ],
    },
    {
      title: "Lambda",
      icon: "zap",
      color: "yellow",
      commands: [
        { cmd: "aws lambda list-functions", desc: "List all functions" },
        { cmd: "aws lambda create-function --function-name <name> --runtime python3.12 --handler index.handler --role <arn> --zip-file fileb://code.zip", desc: "Create function" },
        { cmd: "aws lambda invoke --function-name <name> output.json", desc: "Invoke function" },
        { cmd: "aws lambda update-function-code --function-name <name> --zip-file fileb://code.zip", desc: "Update code" },
        { cmd: "aws lambda delete-function --function-name <name>", desc: "Delete function" },
        { cmd: "aws lambda get-function --function-name <name>", desc: "Get function details" },
        { cmd: "aws lambda add-permission --function-name <name> --statement-id <id> --action lambda:InvokeFunction --principal apigateway.amazonaws.com", desc: "Add permission" },
        { cmd: "aws lambda list-event-source-mappings", desc: "List triggers" },
        { cmd: "aws lambda update-function-configuration --function-name <name> --timeout 30", desc: "Update config" },
        { cmd: "aws lambda publish-version --function-name <name>", desc: "Publish version" },
      ],
    },
    {
      title: "RDS",
      icon: "database",
      color: "red",
      commands: [
        { cmd: "aws rds describe-db-instances", desc: "List all DB instances" },
        { cmd: "aws rds create-db-instance --db-instance-identifier <name> --db-instance-class db.t3.micro --engine mysql --master-username admin --master-user-password <pass>", desc: "Create DB instance" },
        { cmd: "aws rds delete-db-instance --db-instance-identifier <name> --skip-final-snapshot", desc: "Delete DB instance" },
        { cmd: "aws rds stop-db-instance --db-instance-identifier <name>", desc: "Stop DB instance" },
        { cmd: "aws rds start-db-instance --db-instance-identifier <name>", desc: "Start DB instance" },
        { cmd: "aws rds create-db-snapshot --db-instance-identifier <name> --db-snapshot-identifier <snap>", desc: "Create snapshot" },
        { cmd: "aws rds describe-db-snapshots", desc: "List snapshots" },
        { cmd: "aws rds restore-db-instance-from-db-snapshot --db-instance-identifier <name> --db-snapshot-identifier <snap>", desc: "Restore from snapshot" },
        { cmd: "aws rds modify-db-instance --db-instance-identifier <name> --allocated-storage 100", desc: "Modify instance" },
      ],
    },
    {
      title: "DynamoDB",
      icon: "table",
      color: "purple",
      commands: [
        { cmd: "aws dynamodb list-tables", desc: "List all tables" },
        { cmd: "aws dynamodb create-table --table-name <name> --attribute-definitions AttributeName=id,AttributeType=S --key-schema AttributeName=id,KeyType=HASH --billing-mode PAY_PER_REQUEST", desc: "Create table" },
        { cmd: "aws dynamodb delete-table --table-name <name>", desc: "Delete table" },
        { cmd: "aws dynamodb put-item --table-name <name> --item '{\"id\":{\"S\":\"1\"},\"name\":{\"S\":\"test\"}}'", desc: "Put item" },
        { cmd: "aws dynamodb get-item --table-name <name> --key '{\"id\":{\"S\":\"1\"}}'", desc: "Get item" },
        { cmd: "aws dynamodb scan --table-name <name>", desc: "Scan entire table" },
        { cmd: "aws dynamodb query --table-name <name> --key-condition-expression \"id = :id\" --expression-attribute-values '{\":id\":{\"S\":\"1\"}}'", desc: "Query table" },
        { cmd: "aws dynamodb describe-table --table-name <name>", desc: "Describe table" },
      ],
    },
    {
      title: "API Gateway",
      icon: "globe",
      color: "blue",
      commands: [
        { cmd: "aws apigateway get-rest-apis", desc: "List all REST APIs" },
        { cmd: "aws apigateway create-rest-api --name <name>", desc: "Create REST API" },
        { cmd: "aws apigateway get-resources --rest-api-id <id>", desc: "Get API resources" },
        { cmd: "aws apigateway create-resource --rest-api-id <id> --parent-id <parent> --path-part <path>", desc: "Create resource" },
        { cmd: "aws apigateway put-method --rest-api-id <id> --resource-id <res> --http-method GET --authorization-type NONE", desc: "Create method" },
        { cmd: "aws apigateway create-deployment --rest-api-id <id> --stage-name prod", desc: "Deploy API" },
        { cmd: "aws apigateway get-stages --rest-api-id <id>", desc: "List stages" },
        { cmd: "aws apigatewayv2 get-apis", desc: "List HTTP/WebSocket APIs" },
        { cmd: "aws apigatewayv2 create-api --name <name> --protocol-type HTTP", desc: "Create HTTP API" },
      ],
    },
    {
      title: "Route 53",
      icon: "globe",
      color: "green",
      commands: [
        { cmd: "aws route53 list-hosted-zones", desc: "List all hosted zones" },
        { cmd: "aws route53 create-hosted-zone --name example.com --caller-reference <unique-id>", desc: "Create hosted zone" },
        { cmd: "aws route53 list-resource-record-sets --hosted-zone-id <id>", desc: "List DNS records" },
        { cmd: "aws route53 change-resource-record-sets --hosted-zone-id <id> --change-batch file://records.json", desc: "Update DNS records" },
        { cmd: "aws route53 get-hosted-zone --id <id>", desc: "Get zone details" },
        { cmd: "aws route53 delete-hosted-zone --id <id>", desc: "Delete hosted zone" },
        { cmd: "aws route53 list-health-checks", desc: "List health checks" },
        { cmd: "aws route53 create-health-check --caller-reference <id> --health-check-config file://health.json", desc: "Create health check" },
      ],
    },
    {
      title: "CloudFormation",
      icon: "layers",
      color: "cyan",
      commands: [
        { cmd: "aws cloudformation create-stack --stack-name <name> --template-body file://template.yaml", desc: "Create stack" },
        { cmd: "aws cloudformation update-stack --stack-name <name> --template-body file://template.yaml", desc: "Update stack" },
        { cmd: "aws cloudformation delete-stack --stack-name <name>", desc: "Delete stack" },
        { cmd: "aws cloudformation describe-stacks", desc: "List all stacks" },
        { cmd: "aws cloudformation describe-stack-events --stack-name <name>", desc: "View stack events" },
        { cmd: "aws cloudformation validate-template --template-body file://template.yaml", desc: "Validate template" },
        { cmd: "aws cloudformation list-stack-resources --stack-name <name>", desc: "List stack resources" },
        { cmd: "aws cloudformation get-template --stack-name <name>", desc: "Get stack template" },
        { cmd: "aws cloudformation create-change-set --stack-name <name> --change-set-name <cs> --template-body file://template.yaml", desc: "Create change set" },
        { cmd: "aws cloudformation execute-change-set --change-set-name <cs> --stack-name <name>", desc: "Execute change set" },
      ],
    },
    {
      title: "ECS & ECR",
      icon: "container",
      color: "orange",
      commands: [
        { cmd: "aws ecr get-login-password | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com", desc: "Login to ECR" },
        { cmd: "aws ecr create-repository --repository-name <name>", desc: "Create ECR repository" },
        { cmd: "aws ecr describe-repositories", desc: "List repositories" },
        { cmd: "aws ecr list-images --repository-name <name>", desc: "List images" },
        { cmd: "aws ecr delete-repository --repository-name <name> --force", desc: "Delete repository" },
        { cmd: "aws ecs list-clusters", desc: "List ECS clusters" },
        { cmd: "aws ecs create-cluster --cluster-name <name>", desc: "Create ECS cluster" },
        { cmd: "aws ecs list-services --cluster <name>", desc: "List services" },
        { cmd: "aws ecs describe-tasks --cluster <name> --tasks <task-id>", desc: "Describe tasks" },
        { cmd: "aws ecs update-service --cluster <name> --service <service> --force-new-deployment", desc: "Force new deployment" },
        { cmd: "aws ecs register-task-definition --cli-input-json file://task-def.json", desc: "Register task definition" },
      ],
    },
    {
      title: "EKS",
      icon: "box",
      color: "purple",
      commands: [
        { cmd: "aws eks list-clusters", desc: "List all EKS clusters" },
        { cmd: "aws eks create-cluster --name <name> --role-arn <arn> --resources-vpc-config subnetIds=<ids>", desc: "Create cluster" },
        { cmd: "aws eks describe-cluster --name <name>", desc: "Get cluster details" },
        { cmd: "aws eks update-kubeconfig --name <name>", desc: "Update kubectl config" },
        { cmd: "aws eks delete-cluster --name <name>", desc: "Delete cluster" },
        { cmd: "aws eks list-nodegroups --cluster-name <name>", desc: "List node groups" },
        { cmd: "aws eks create-nodegroup --cluster-name <name> --nodegroup-name <ng> --node-role <arn> --subnets <ids>", desc: "Create node group" },
        { cmd: "aws eks describe-nodegroup --cluster-name <name> --nodegroup-name <ng>", desc: "Describe node group" },
        { cmd: "aws eks update-nodegroup-config --cluster-name <name> --nodegroup-name <ng> --scaling-config minSize=1,maxSize=5,desiredSize=3", desc: "Update scaling" },
      ],
    },
    {
      title: "Secrets Manager & SSM",
      icon: "key",
      color: "yellow",
      commands: [
        { cmd: "aws secretsmanager list-secrets", desc: "List all secrets" },
        { cmd: "aws secretsmanager create-secret --name <name> --secret-string '{\"user\":\"admin\",\"pass\":\"secret\"}'", desc: "Create secret" },
        { cmd: "aws secretsmanager get-secret-value --secret-id <name>", desc: "Get secret value" },
        { cmd: "aws secretsmanager update-secret --secret-id <name> --secret-string <value>", desc: "Update secret" },
        { cmd: "aws secretsmanager delete-secret --secret-id <name>", desc: "Delete secret" },
        { cmd: "aws ssm get-parameter --name <name>", desc: "Get SSM parameter" },
        { cmd: "aws ssm put-parameter --name <name> --value <value> --type SecureString", desc: "Create SSM parameter" },
        { cmd: "aws ssm get-parameters-by-path --path /app/", desc: "Get parameters by path" },
        { cmd: "aws ssm describe-parameters", desc: "List all parameters" },
      ],
    },
    {
      title: "CloudWatch",
      icon: "activity",
      color: "red",
      commands: [
        { cmd: "aws logs describe-log-groups", desc: "List log groups" },
        { cmd: "aws logs create-log-group --log-group-name <name>", desc: "Create log group" },
        { cmd: "aws logs tail <log-group> --follow", desc: "Tail logs in real-time" },
        { cmd: "aws logs filter-log-events --log-group-name <name> --filter-pattern \"ERROR\"", desc: "Filter log events" },
        { cmd: "aws cloudwatch list-metrics", desc: "List all metrics" },
        { cmd: "aws cloudwatch get-metric-statistics --namespace AWS/EC2 --metric-name CPUUtilization --dimensions Name=InstanceId,Value=<id> --start-time <time> --end-time <time> --period 300 --statistics Average", desc: "Get metric stats" },
        { cmd: "aws cloudwatch put-metric-alarm --alarm-name <name> --metric-name CPUUtilization --namespace AWS/EC2 --threshold 80 --comparison-operator GreaterThanThreshold --evaluation-periods 2 --period 300 --statistic Average", desc: "Create alarm" },
        { cmd: "aws cloudwatch describe-alarms", desc: "List all alarms" },
        { cmd: "aws logs put-retention-policy --log-group-name <name> --retention-in-days 30", desc: "Set log retention" },
      ],
    },
    {
      title: "SNS, SQS & ElastiCache",
      icon: "message-square",
      color: "gray",
      commands: [
        { cmd: "aws sns list-topics", desc: "List all topics" },
        { cmd: "aws sns create-topic --name <name>", desc: "Create topic" },
        { cmd: "aws sns subscribe --topic-arn <arn> --protocol email --notification-endpoint <email>", desc: "Subscribe to topic" },
        { cmd: "aws sns publish --topic-arn <arn> --message \"Hello\"", desc: "Publish message" },
        { cmd: "aws sqs list-queues", desc: "List all queues" },
        { cmd: "aws sqs create-queue --queue-name <name>", desc: "Create queue" },
        { cmd: "aws sqs send-message --queue-url <url> --message-body \"Hello\"", desc: "Send message" },
        { cmd: "aws sqs receive-message --queue-url <url>", desc: "Receive messages" },
        { cmd: "aws sqs delete-message --queue-url <url> --receipt-handle <handle>", desc: "Delete message" },
        { cmd: "aws elasticache describe-cache-clusters", desc: "List ElastiCache clusters" },
        { cmd: "aws elasticache create-cache-cluster --cache-cluster-id <id> --engine redis --cache-node-type cache.t3.micro --num-cache-nodes 1", desc: "Create cache cluster" },
      ],
    },
  ];

  const quickRef: QuickRefItem[] = [
    { term: "Region", desc: "Geographic location" },
    { term: "AZ", desc: "Availability Zone" },
    { term: "ARN", desc: "Amazon Resource Name" },
    { term: "IAM", desc: "Identity & Access" },
    { term: "VPC", desc: "Virtual Private Cloud" },
    { term: "S3", desc: "Simple Storage" },
    { term: "EC2", desc: "Elastic Compute" },
    { term: "RDS", desc: "Relational Database" },
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
              <div className="absolute inset-0 bg-orange/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-orange/20 to-yellow/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="cloud"
                  className="w-7 h-7 text-orange print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                AWS Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Complete reference for AWS CLI commands
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
            <Icon name="terminal" className="w-4 h-4 text-orange" />
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider print:text-[10px]">
              AWS Terminology
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 print:gap-x-4 print:gap-y-1">
            {quickRef.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm print:text-[10px]"
              >
                <code className="px-2 py-1 bg-bg-tertiary/80 rounded-md text-orange font-mono text-xs print:text-[9px] print:px-1 border border-border-subtle">
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
                      <code className="block text-xs font-mono text-orange break-all print:text-[8px] print:leading-tight leading-relaxed whitespace-pre-wrap">
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
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <Icon name="cloud" className="w-4 h-4 text-orange" />
            </div>
            <span className="text-text-secondary">AWS Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <a
              href="https://docs.aws.amazon.com/cli/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>docs.aws.amazon.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AWSCheatSheet;
