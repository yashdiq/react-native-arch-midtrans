require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "ArchMidtrans"
  s.version      = package["version"]
  s.summary      = "ArchMidtrans"
  s.description  = <<-DESC
                  react-native-arch-midtrans
                   DESC
  s.homepage     = "https://github.com/yashdiq/react-native-arch-midtrans"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "Yashdiq Lubis" => "yashdiq@gmail.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/yashdiq/react-native-arch-midtrans.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "MidtransCoreKit"
  s.dependency "MidtransKit"
end

