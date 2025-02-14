CREATE TABLE recipes (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT '菜谱ID，主键，自增',
  NAME VARCHAR ( 255 ) NOT NULL COMMENT '菜谱名称',
  description TEXT COMMENT '菜谱描述',
  summary TEXT COMMENT '菜谱总结',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间' 
) COMMENT = '菜谱基本信息表';

CREATE TABLE ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT '原料ID，主键，自增',
  recipe_id INT COMMENT '外键，关联菜谱ID',
  NAME VARCHAR ( 255 ) NOT NULL COMMENT '原料或调料名称',
  quantity VARCHAR ( 100 ) COMMENT '用量（如“三两”、“半勺”）',
  type ENUM ( 'ingredient', 'seasoning' ) NOT NULL COMMENT '类型：食材或调料',
  is_required BOOLEAN DEFAULT FALSE COMMENT '是否必需（True/False）',
  FOREIGN KEY ( recipe_id ) REFERENCES recipes ( id ) ON DELETE CASCADE 
) COMMENT = '菜谱原料和调料表';

CREATE TABLE steps (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT '步骤ID，主键，自增',
  recipe_id INT COMMENT '外键，关联菜谱ID',
  step_number INT NOT NULL COMMENT '步骤序号',
  description TEXT NOT NULL COMMENT '步骤描述',
  FOREIGN KEY ( recipe_id ) REFERENCES recipes ( id ) ON DELETE CASCADE 
) COMMENT = '菜谱制作步骤表';
