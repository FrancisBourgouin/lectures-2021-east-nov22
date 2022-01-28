# Variables & ' vs " & #{} & puts

bob = 5
bob = "Hello"
bob = ["Hello", "Little", "Chicken"]
bob = {name:"Little", last_name:"Chicken"} # Hash

puts bob[:name]
p bob[:name]


p 5 ** 5

some_name = "Dusty"

puts "Hello #{some_name}"
puts 'Hello #{some_name}'
p "Hello #{some_name}"
p 'Hello #{some_name}'


some_array = [1,2,3,4,5]

some_array.include?(3)