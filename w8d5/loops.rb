# each, each_with, while, for, select, steps, .times

amount = 2

amount.times do
  puts "Yo yo Richard"
end

some_list = ["a","b","c"]

some_list.each do |value|
  puts "Wiggle wiggle #{value}"
end

some_list.each_with_index do |value, index|
  puts "Wiggle wiggle #{value} #{index}"
end

(50..100).step(2).each do |value|
  puts value + 1
end