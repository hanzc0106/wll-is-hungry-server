-- 重命名原有的 ingredients 表为 ingredients_old
ALTER TABLE ingredients RENAME TO ingredients_old;

-- 插入数据到新的 ingredients 表
INSERT INTO ingredients (name, type)
SELECT DISTINCT name, type
FROM ingredients_old;

-- 插入数据到 recipes_ingredients 表
INSERT INTO recipes_ingredients (recipe_id, ingredient_id, quantity, is_required)
SELECT 
  io.recipe_id, 
  i.id, 
  io.quantity,
  io.is_required
FROM ingredients_old io
JOIN ingredients i ON io.name = i.name AND io.type = i.type
JOIN recipes r ON r.id = io.recipe_id;

-- 删除临时表 ingredients_old
DROP TABLE IF EXISTS ingredients_old;