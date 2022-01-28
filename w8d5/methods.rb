
def calculate_something num1, num2
  return num1 + num2 unless num1 > 3
  puts "potato"
end

result = calculate_something(4,5)
result = calculate_something(1,5)

puts result

def fancy_method
  puts "🔥🔥🔥🔥🔥🔥🔥🔥"
  puts yield
  puts "☕☕☕☕☕☕☕☕"
end


fancy_method {calculate_something(4,5)}

fancy_method { 5 + 5 }



def multi_greetings name, language
  if language == "French"
    "Bonjour #{name}"
  elsif language == "English"
    "Good morning #{name}"
  elsif language == "Russian"
    "Dobroe utro #{name}"
  end
end


fancy_method { multi_greetings("Joshua", "French") }
fancy_method { multi_greetings("Joshua", "English") }
fancy_method { multi_greetings("Joshua", "German") }