Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  # ssh vagrant@localhost -p 2222 -i .vagrant/machines/vm01/virtualbox/private_key
  # ssh vagrant@localhost -p 2200 -i .vagrant/machines/vm02/virtualbox/private_key
  (1..8).each do |i|
    config.vm.define "vm0#{i}" do |node|
      node.vm.network "private_network", ip: "10.0.0.#{i}"
    end
  end

  config.vm.provision "shell" do |s|
    ssh_pub_key = File.readlines("./id_rsa.pub").first.strip
    ssh_priv_key = File.read("./id_rsa")
    s.inline = <<-SHELL
      mkdir -p /root/.ssh
      echo #{ssh_pub_key} >> /root/.ssh/authorized_keys
      echo #{ssh_pub_key} >> /home/vagrant/.ssh/authorized_keys
      echo "#{ssh_priv_key}" > /root/.ssh/id_rsa
      chmod 600 /root/.ssh/id_rsa
      echo "#{ssh_priv_key}" > /home/vagrant/.ssh/id_rsa
      chown vagrant:vagrant /home/vagrant/.ssh/id_rsa
      chmod 600 /home/vagrant/.ssh/id_rsa
      apt-get install -y python
    SHELL
  end

  # Password auth via SSH
  # config.ssh.username = 'vagrant'
  # config.ssh.password = 'vagrant'
  # config.ssh.insert_key = false

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "512"
  end
end
