local table = { "a", "b", 'c' }
local dictionary = { name = 'hp', age = 125, gender = 'XY' }

local itable = { [1] = 'a', [2] = 'b', [3] = 'c' }

-- for i = 1, #table do -- 3번
--     print(table[i])
-- end

for key, values in pairs(dictionary) do
    print(key, values)
end

for key, values in ipairs(itable) do
    print(key, values)
end

for key, values in ipairs(table) do
    print(key, values)
end
