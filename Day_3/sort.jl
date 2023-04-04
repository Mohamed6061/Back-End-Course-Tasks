function search(arr, ele)
    i = 0
    for a in arr 
        if a == ele 
            return i
        end
        i += 1
    end
    return nothing
end

arr = [2, 5, 7, 12, 16, 23, 28, 31, 34, 39]
println(search(arr, 23))
# 5

# Using Python
# def search (arr , ele) :
#     i=0 
#     for a in arr :
#         if a == ele :
#             return i
#         else :
#             i = i+1
#     return None

# arr = [2, 5, 7, 12, 16, 23, 28, 31, 34, 39]
# print(search(arr, 5))