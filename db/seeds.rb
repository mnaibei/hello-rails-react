# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
greetings = [
  'habari hujambo',
  'Hello, how are you?',
  'Hola, cómo estás',
  'Hallo, wie geht es dir?',
  '你好吗',
  'lumela u phela joang',
  'Hello hoe gaan dit',
  'Bonjour comment ça va',
  'こんにちは、元気ですか',
  'Hej hur mår du',
  'Hei, hvordan går det',
  'Ciao come stai',
  'اسلام عليکم څنګه ياست',
  'Привет, как дела?',
  'Pẹlẹ o bawo ni'
]

greetings.each do |greeting|
  Message.find_or_create_by(content: greeting)
end
