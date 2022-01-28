class Student
  def initialize name, iq
    @name = name
    @iq = iq
  end

  # attr_reader :name
  # attr_writer :name
  attr_accessor :name, :iq

  def greetings
    puts "Hi."
    puts "My name is #{@name}"
    puts "My IQ (#{@iq}) is off the charts."
  end

end

jeremiah = Student.new("Jeremiah", 9001)

puts jeremiah
p jeremiah

jeremiah.greetings
jeremiah.name = "Jesper (Not Dexter)"

puts jeremiah.name
jeremiah.greetings

