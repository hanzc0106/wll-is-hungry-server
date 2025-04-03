CREATE TABLE IF NOT EXISTS recipes (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT '菜谱ID，主键，自增',
  name VARCHAR ( 255 ) NOT NULL COMMENT '菜谱名称',
  description TEXT COMMENT '菜谱描述',
  summary TEXT COMMENT '菜谱总结',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间' 
) COMMENT = '菜谱基本信息表';

CREATE TABLE IF NOT EXISTS ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT '原料ID，主键，自增',
  name VARCHAR ( 255 ) NOT NULL COMMENT '原料或调料名称',
  type ENUM ( 'ingredient', 'seasoning' ) NOT NULL COMMENT '类型：食材或调料'
) COMMENT = '原料和调料信息表';

CREATE TABLE IF NOT EXISTS recipes_ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT '关联ID，主键，自增',
  recipe_id INT COMMENT '外键，关联菜谱ID',
  ingredient_id INT COMMENT '外键，关联原料ID',
  quantity VARCHAR ( 100 ) COMMENT '用量（如“三两”、“半勺”）',
  is_required BOOLEAN DEFAULT FALSE COMMENT '是否必需（True/False）',
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
) COMMENT = '菜谱与原料关联表，包含用量信息';

CREATE TABLE IF NOT EXISTS steps (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT '步骤ID，主键，自增',
  recipe_id INT COMMENT '外键，关联菜谱ID',
  step_number INT NOT NULL COMMENT '步骤序号',
  description TEXT NOT NULL COMMENT '步骤描述',
  FOREIGN KEY ( recipe_id ) REFERENCES recipes ( id ) ON DELETE CASCADE 
) COMMENT = '菜谱制作步骤表';

CREATE TABLE IF NOT EXISTS recipe_categories (
  recipe_id INT UNSIGNED NOT NULL COMMENT '外键，关联菜谱ID',
  category_id INT UNSIGNED NOT NULL COMMENT '外键，关联类别ID',
  FOREIGN KEY (recipe_id) REFERENCES recipes (id),
  FOREIGN KEY (category_id) REFERENCES categories (id)
) COMMENT = '菜谱与类别关联表';

CREATE TABLE IF NOT EXISTS recipe_tags (
  recipe_id INT UNSIGNED NOT NULL COMMENT '外键，关联菜谱ID',
  tag_id INT UNSIGNED NOT NULL COMMENT '外键，关联标签ID',
  FOREIGN KEY (recipe_id) REFERENCES recipes (id),
  FOREIGN KEY (tag_id) REFERENCES tags (id)
) COMMENT = '菜谱与标签关联表';

CREATE TABLE IF NOT EXISTS categories (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
  name VARCHAR(50) NOT NULL COMMENT '类别名称'
) COMMENT = '菜谱类别表';

CREATE TABLE IF NOT EXISTS tags (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
  name VARCHAR(50) NOT NULL COMMENT '标签名称'
) COMMENT = '菜谱标签表';

