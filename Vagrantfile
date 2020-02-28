Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  (1..8).each do |i|
    config.vm.define "vm0#{i}" do |node|
      node.vm.network "private_network", ip: "10.0.0.#{i}"
    end
  end

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "512"
  end
end
