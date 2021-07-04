module "PdfGenerator" {
  source = "git::ssh://git@github.com/HocVienCongGiao/terraform-infra.git//skeleton/services/dynamodb-function"
  service_name = var.service_name

  handler       = "index.pdf_generator"
  function_name = "pdf_generator"
  table_name    = "PdfGeneration"
  is_in_vpc     = true
  runtime       = "nodejs14.x"
  memory_size   = 1024
  timeout       = 40

  environment = var.environment
  db_host              = var.db_host
  db_user              = var.db_user
  db_password          = var.db_password
  db_name              = var.db_name
}
