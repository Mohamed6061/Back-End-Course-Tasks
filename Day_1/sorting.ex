a = [9, 6, 12, 5, 1]

for i <- 0..(length(a) - 2) do
  swapped = false
  for j <- 0..(length(a) - 2 - i) do
    if a[j] > a[j + 1] do
      temp = a[j]
      a[j] = a[j + 1]
      a[j + 1] = temp
      swapped = true
    end
  end
  if !swapped do
    break
  end
end

IO.inspect(a)
# [1, 5, 6, 9, 12]
