package com.tgex.tgex.service;

import com.tgex.tgex.model.FileData;

import com.tgex.tgex.repository.FileDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class StorageService {

    @Autowired
    private FileDataRepository fileDataRepository;

    @Autowired
    private ResourceLoader resourceLoader;

    private final String FOLDER_PATH = "file_upload\\poster";

    public String uploadImageToFileSystem(MultipartFile file) throws IOException {

        String rootPath = System.getProperty("user.dir");

        // Create the directory if it doesn't exist
        String folderPath = rootPath + File.separator + "src/main/resources/static/upload";
        // File directory = new File(folderPath);
        // if (!directory.exists()) {
        // directory.mkdirs();
        // }

        String filePath = folderPath + File.separator + file.getOriginalFilename();

        // FileData fileData = fileDataRepository.save(FileData.builder()
        // .name(file.getOriginalFilename())
        // .type(file.getContentType())
        // .filePath(filePath).build());

        file.transferTo(new File(filePath));
        return file.getOriginalFilename();
    }

    public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
        Optional<FileData> fileData = fileDataRepository.findByName(fileName);
        String filePath = fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }

}
