local input = io.read

local function main()
    print('가위 바위 보')
    return input("l")
end


while true do
    my = main()
    if my == 'q' then
        break
    end

    local oppose = math.random(1, 3)

    print(oppose)

    if my == '가위' and oppose == 1 or my == '바위' or oppose == 2 or my == '보' or oppose == 3 then
        print('비김')
    elseif my == '가위' and oppose == 2 or my == '바위' and oppose == 3 or my == '보' and oppose == 1 then
        print('짐')
    elseif my == '가위' and oppose == 3 or my == '바위' and oppose == 1 or my == '보' and oppose == 2 then
        print('이김')
    end
end
