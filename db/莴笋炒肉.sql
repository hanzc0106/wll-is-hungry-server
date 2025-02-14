-- 插入菜谱基本信息
INSERT INTO recipes (name, description, summary) 
VALUES (
    '莴笋炒肉', 
    '一道经典的家常菜，口感鲜香，莴笋清脆，肉片嫩滑', 
    '1. 起初加油不宜过多，要预估煸炒猪肉的出油量\n2. 煸炒肉片火不要过大，加豆瓣酱前不要把肉煸老\n3. 豆瓣酱炒香后，再加入莴笋'
);

-- 获取刚插入的菜谱 ID
SET @recipe_id = LAST_INSERT_ID();

-- 插入调料
INSERT INTO ingredients (recipe_id, name, quantity, type, is_required) 
VALUES 
(@recipe_id, '豆瓣酱', '一勺', 'seasoning', TRUE),
(@recipe_id, '蒜', '三颗', 'seasoning', FALSE),
(@recipe_id, '干辣椒', '适量', 'seasoning', FALSE),
(@recipe_id, '花椒', '适量', 'seasoning', FALSE),
(@recipe_id, '生抽', '半勺', 'seasoning', FALSE),
(@recipe_id, '醋', '半勺', 'seasoning', FALSE),
(@recipe_id, '盐', '适量', 'seasoning', FALSE),
(@recipe_id, '糖', '半勺', 'seasoning', FALSE);

-- 插入食材
INSERT INTO ingredients (recipe_id, name, quantity, type, is_required) 
VALUES 
(@recipe_id, '猪肉', '三两', 'ingredient', TRUE),
(@recipe_id, '莴笋', '半个', 'ingredient', TRUE);

-- 插入步骤
INSERT INTO steps (recipe_id, step_number, description) 
VALUES 
(@recipe_id, 1, '热锅，锅热后加入少许油（根据肉的出油量决定）'),
(@recipe_id, 2, '油温六成时加入肉片煸炒，注意火候不要过大，将肉片炒出油脂'),
(@recipe_id, 3, '肉片表面开始焦黄时加入一勺豆瓣酱（注意这里不要将肉片炒老）'),
(@recipe_id, 4, '加入蒜，花椒，干辣椒，半勺糖，与豆瓣酱一起炒出香味'),
(@recipe_id, 5, '炒出香味后加入莴笋翻炒'),
(@recipe_id, 6, '加入半勺生抽，半勺醋，根据味道咸淡酌情加入一些盐'),
(@recipe_id, 7, '出锅装盘');