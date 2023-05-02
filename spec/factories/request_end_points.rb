# frozen_string_literal: true

FactoryBot.define do
  factory :request_end_point do
    name { Faker::Lorem.word }
    description { "MyString" }
    max_requests { 10 }
  end
end
